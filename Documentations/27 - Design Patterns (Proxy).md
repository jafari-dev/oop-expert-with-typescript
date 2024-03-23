### Proxy

> Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

<img src="https://user-images.githubusercontent.com/37804060/165858391-e373f505-107c-492d-b354-6a10d6441e35.png"/>

```typescript
interface IRequestHandler {
  sendRequest(method: string, url: string, body?: string): void;
}

class RequestHandler implements IRequestHandler {
  sendRequest(method: string, url: string, body?: string): void {
    console.log(`Request sent: ${method} ${url} ${body}`);
  }
}

class RequestHandlerProxy implements IRequestHandler {
  private realApi: RequestHandler;

  constructor(realApi: RequestHandler) {
    this.realApi = realApi;
  }

  private logRequest(method: string, url: string, body?: string): void {
    console.log(`Request logged: ${method} ${url} ${body}`);
  }

  private validateRequestUrl(url: string): boolean {
    return url.startsWith("/api");
  }

  sendRequest(method: string, url: string, body?: string): void {
    if (this.validateRequestUrl(url)) {
      this.realApi.sendRequest(method, url, body);
      this.logRequest(method, url, body);
    }
  }
}

// Usage

const realRequestHandler = new RequestHandler();
const proxyRequestHandler = new RequestHandlerProxy(realRequestHandler);

proxyRequestHandler.sendRequest("GET", "/api/users");
```
