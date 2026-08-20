interface IRequestHandler {
  sendRequest(method: string, url: string, body?: string): void;
}

class RequestHandler implements IRequestHandler {
  sendRequest(method: string, url: string, body?: string): void {
    console.log(`Request sent: ${method} ${url} ${body ?? "(no body)"}`);
  }
}

class RequestHandlerProxy implements IRequestHandler {
  private realApi: IRequestHandler;

  constructor(realApi: IRequestHandler) {
    this.realApi = realApi;
  }

  private logRequest(method: string, url: string, body?: string): void {
    console.log(`Request logged: ${method} ${url} ${body ?? "(no body)"}`);
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
// Output:
// Request sent: GET /api/users (no body)
// Request logged: GET /api/users (no body)

// Blocked by the proxy: nothing reaches the real handler.
proxyRequestHandler.sendRequest("GET", "/internal/users");
