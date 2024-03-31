### Chain of Responsibility

> Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

<img src="https://github.com/jafari-dev/oop-expert-with-typescript/assets/37804060/2bea3788-2ba7-49e9-87d2-a9aa8d81e43e"/>

```typescript
interface IResponse {
  statusCode: number;
  body: Record<string, unknown>;
  authentication: Record<string, string>;
  message?: string;
}

class ResponseHandler {
  private nextHandler?: ResponseHandler;

  protected process(response: IResponse) {
    return response;
  }

  public setNext(ResponseHandler: ResponseHandler): ResponseHandler {
    this.nextHandler = ResponseHandler;

    return ResponseHandler;
  }

  public handle(response: IResponse): IResponse {
    const processedResponse = this.process(response);

    if (this.nextHandler != null) {
      return this.nextHandler.handle(processedResponse);
    } else {
      return processedResponse;
    }
  }
}

class Encryptor extends ResponseHandler {
  private encryptTokens(response: IResponse) {
    const { authentication } = response;
    const encryptedAuthTokens: Record<string, string> = {};

    for (const key in authentication) {
      encryptedAuthTokens[key] = `encrypted-${authentication[key]}`;
    }

    return { ...response, authentication: encryptedAuthTokens };
  }

  protected process(response: IResponse) {
    const encryptedResponse = this.encryptTokens(response);

    return encryptedResponse;
  }
}

class BodyFormatter extends ResponseHandler {
  private transformKeysToCamelCase(body: Record<string, unknown>) {
    const newBody: Record<string, unknown> = {};

    for (const key in body) {
      const camelCaseKey = key.replace(/_([a-z])/g, (subString) =>
        subString[1].toUpperCase()
      );
      newBody[camelCaseKey] = body[key];
    }

    return newBody;
  }

  protected process(response: IResponse) {
    const clonedResponseBody = JSON.parse(JSON.stringify(response.body));
    const formattedBody = this.transformKeysToCamelCase(clonedResponseBody);
    const formattedResponse = { ...response, body: formattedBody };

    return formattedResponse;
  }
}

class MetadataAdder extends ResponseHandler {
  private getResponseMetadata(statusCode: number) {
    if (statusCode < 200) return "Informational";
    else if (statusCode < 300) return "Success";
    else if (statusCode < 400) return "Redirection";
    else if (statusCode < 500) return "Client Error";
    else return "Server Error";
  }

  protected process(response: IResponse) {
    const updatedResponse = {
      ...response,
      message: this.getResponseMetadata(response.statusCode),
    };

    return updatedResponse;
  }
}

// Usage
const response: IResponse = {
  statusCode: 200,
  body: {
    design_pattern_name: "Chain of Responsibility",
    pattern_category: "Behavioral",
    complexity_percentage: 80,
  },
  authentication: {
    api_token: "12345678",
    refresh_token: "ABCDEFGH",
  },
};

const responseHandler = new ResponseHandler();
const encryptor = new Encryptor();
const bodyFormatter = new BodyFormatter();
const metadataAdder = new MetadataAdder();

responseHandler
  .setNext(encryptor)
  .setNext(bodyFormatter)
  .setNext(metadataAdder);

const resultResponse = responseHandler.handle(response);

console.log(resultResponse);
```
