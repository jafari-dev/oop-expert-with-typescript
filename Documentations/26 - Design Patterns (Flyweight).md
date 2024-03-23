### Flyweight (Cache)

> Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

<img src="https://user-images.githubusercontent.com/37804060/165858370-1ec33962-9bad-4f5d-8078-132bf7d9da29.png"/>

```typescript
interface IRequest {
  readonly method: "GET" | "POST" | "PUT" | "DELETE";
  readonly url: string;
  readonly body: Record<string, string>;
  send(): Promise<any>;
}

class MinimalRequest implements IRequest {
  constructor(
    public readonly method: "GET" | "POST" | "PUT" | "DELETE",
    public readonly url: string,
    public readonly body: Record<string, string> = {}
  ) {}

  public async send(): Promise<any> {
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
    body: Record<string, string> = {}
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
    requestsInfo: {
      method: "GET" | "POST" | "PUT" | "DELETE";
      url: string;
      body?: Record<string, string>;
    }[]
  ): Promise<any[]> {
    const requests = requestsInfo.map((requestInfo) =>
      this.factory.createRequest(
        requestInfo.method,
        requestInfo.url,
        requestInfo.body
      )
    );
    const responses = await Promise.all(
      requests.map((request) => request.send())
    );

    return responses;
  }
}
```
