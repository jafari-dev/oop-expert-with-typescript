type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface IRequest {
  readonly method: HttpMethod;
  readonly url: string;
  // The body is extrinsic state: it is passed in on every call instead of being
  // stored, so a single flyweight can serve any number of different payloads.
  send(body?: Record<string, string>): Promise<unknown>;
}

class MinimalRequest implements IRequest {
  constructor(
    public readonly method: HttpMethod,
    public readonly url: string,
  ) {}

  public async send(body: Record<string, string> = {}): Promise<unknown> {
    const options = { method: this.method, body: JSON.stringify(body) };

    const response = await fetch(this.url, options);

    return response.json();
  }
}

class RequestFactory {
  private requests: Map<string, IRequest> = new Map();

  // Only the intrinsic state (method + url) identifies a flyweight, so the same
  // endpoint is represented by exactly one shared object.
  public createRequest(method: HttpMethod, url: string): IRequest {
    const key = `${method}-${url}`;
    const cachedRequest = this.requests.get(key);

    if (cachedRequest != null) {
      return cachedRequest;
    }

    const request = new MinimalRequest(method, url);

    this.requests.set(key, request);

    return request;
  }
}

class ParallelRequestsHandler {
  private factory: RequestFactory;

  constructor(factory: RequestFactory) {
    this.factory = factory;
  }

  public async sendAll(
    requestsInfo: Array<{
      method: HttpMethod;
      url: string;
      body?: Record<string, string>;
    }>,
  ): Promise<Array<unknown>> {
    const responses = await Promise.all(
      requestsInfo.map((requestInfo) =>
        this.factory.createRequest(requestInfo.method, requestInfo.url).send(requestInfo.body),
      ),
    );

    return responses;
  }
}
