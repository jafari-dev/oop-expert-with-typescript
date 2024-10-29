interface IRequest {
  readonly method: "GET" | "POST" | "PUT" | "DELETE";
  readonly url: string;
  readonly body: Record<string, string>;
  send(): Promise<unknown>;
}

class MinimalRequest implements IRequest {
  constructor(
    public readonly method: "GET" | "POST" | "PUT" | "DELETE",
    public readonly url: string,
    public readonly body: Record<string, string> = {},
  ) {}

  public async send(): Promise<unknown> {
    const options = { method: this.method, body: JSON.stringify(this.body) };

    const response = await fetch(this.url, options);

    return response.json();
  }
}

class RequestFactory {
  private requests: Map<string, IRequest> = new Map();

  public createRequest(
    method: "GET" | "POST" | "PUT" | "DELETE",
    url: string,
    body: Record<string, string> = {},
  ): IRequest {
    const key = `${method}-${url}`;

    if (!this.requests.has(key)) {
      const request = new MinimalRequest(method, url, body);

      this.requests.set(key, request);
    }

    return this.requests.get(key)!; // Type assertion for clarity
  }
}

class ParallelRequestsHandler {
  private factory: RequestFactory;

  constructor(factory: RequestFactory) {
    this.factory = factory;
  }

  public async sendAll(
    requestsInfo: Array<{
      method: "GET" | "POST" | "PUT" | "DELETE";
      url: string;
      body?: Record<string, string>;
    }>,
  ): Promise<Array<unknown>> {
    const requests = requestsInfo.map((requestInfo) =>
      this.factory.createRequest(requestInfo.method, requestInfo.url, requestInfo.body),
    );
    const responses = await Promise.all(requests.map((request) => request.send()));

    return responses;
  }
}
