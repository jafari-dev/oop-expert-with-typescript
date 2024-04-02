### 5. Dependency Inversion (DIP)

#### Original Definition

> High-level modules should not import anything from low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.

#### Simple Definition

> DIP means that instead of high-level modules depending directly on low-level modules, both should depend on abstractions. This way, changes in low-level modules don't directly affect high-level ones, promoting flexible and maintainable code.

<img src="https://user-images.githubusercontent.com/37804060/153056344-b32c3e4c-8dce-498c-8243-2aed646762f1.jpg"/>

#### Example

In the original code, the `Messenger` class directly depends on specific implementations of messaging APIs like `TelegramApi`, `WhatsappApi`, and `SignalApi`. This tightly couples Messenger with these concrete implementations, making it difficult to change or extend the system without modifying the Messenger class itself. This violates the Dependency Inversion Principle (DIP), which suggests that high-level modules should not depend on low-level modules but rather on abstractions.

To adhere to DIP, we introduce an interface called `MessengerApi`, which defines the methods that the Messenger class requires from a messaging API. Then, each messaging API class (`TelegramApi`, `WhatsappApi` and `SignalApi`) implements this interface, providing their own implementation of the connect and send methods.

By doing this, we decouple the Messenger class from specific messaging API implementations. Now, Messenger depends on the MessengerApi interface rather than concrete implementations. This allows us to easily switch between different messaging APIs or add new ones without modifying the Messenger class. Additionally, it promotes code reusability and simplifies testing, as we can now easily mock the MessengerApi interface for testing purposes. Overall, following DIP enhances the flexibility, maintainability, and testability of the codebase.

:x: Before following DIP:

```typescript
class TelegramApi {
  start() {
    console.log("You are connected to Telegram API!");
  }

  messageTo(targetId: number, message: string) {
    console.log(`${message} sent to ${targetId} by Telegram!`);
  }
}

class WhatsappApi {
  setup() {
    console.log("You are connected to Whatsapp API!");
  }

  pushMessage(message: string, targetId: number) {
    console.log(`${message} sent to ${targetId} by Whatsapp!`);
  }
}

class SignalApi {
  open() {
    console.log("You are connected to Signal API!");
  }

  postMessage(params: { id: number; text: string }) {
    console.log(`${params.text} sent to ${params.id} by Signal!`);
  }
}

class Messenger {
  constructor(private api: TelegramApi | WhatsappApi | SignalApi) {}

  sendMessage(targetId: number, message: string) {
    if (this.api instanceof TelegramApi) {
      this.api.start();
      this.api.messageTo(targetId, message);
    } else if (this.api instanceof WhatsappApi) {
      this.api.setup();
      this.api.pushMessage(message, targetId);
    } else {
      this.api.open();
      this.api.postMessage({ id: targetId, text: message });
    }
  }
}
```

:heavy_check_mark: After following DIP:

```typescript
interface MessengerApi {
  connect: () => void;
  send: (targetId: string, message: string) => void;
}

class TelegramApi implements MessengerApi {
  connect() {
    console.log("You are connected to Telegram API!");
  }

  send(targetId: string, message: string) {
    console.log(`${message} sent to ${targetId} by Telegram!`);
  }
}

class WhatsappApi implements MessengerApi {
  connect() {
    console.log("You are connected to Whatsapp API!");
  }

  send(targetId: string, message: string) {
    console.log(`${message} sent to ${targetId} by Whatsapp!`);
  }
}

class SignalApi implements MessengerApi {
  connect() {
    console.log("You are connected to Signal API!");
  }

  send(targetId: string, message: string) {
    console.log(`${message} sent to ${targetId} by Signal!`);
  }
}

class Messenger {
  constructor(private api: MessengerApi) {}

  sendMessage(targetId: string, message: string) {
    this.api.connect();
    this.api.send(targetId, message);
  }
}
```
