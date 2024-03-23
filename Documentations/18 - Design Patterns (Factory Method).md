### Factory Method

> Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

<img src="https://user-images.githubusercontent.com/37804060/165857922-b719ba3a-458c-4761-8e98-f0d05a93940c.png"/>

```typescript
enum PaymentType {
  Paypal = "PAYPAL",
  Bitcoin = "BITCOIN",
  VisaCard = "VISA_CARD",
}

abstract class PaymentService {
  public abstract payMoney(amount: number): void;
}

class Paypal extends PaymentService {
  public override payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by Paypal.`);
  }
}

class Bitcoin extends PaymentService {
  public override payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by Bitcoin.`);
  }
}

class VisaCard extends PaymentService {
  public override payMoney(amount: number) {
    console.log(`You paid ${amount} dollars by VisaCard.`);
  }
}

abstract class PaymentFactory {
  public abstract createService(): PaymentService;
}

class PaypalFactory extends PaymentFactory {
  public override createService(): PaymentService {
    return new Paypal();
  }
}

class BitcoinFactory extends PaymentFactory {
  public override createService(): PaymentService {
    return new Bitcoin();
  }
}

class VisaCardFactory extends PaymentFactory {
  public override createService(): PaymentService {
    return new VisaCard();
  }
}

// Business logic layer:

function getPaymentFactory(paymentType: PaymentType): PaymentFactory {
  switch (paymentType) {
    case PaymentType.Paypal:
      return new PaypalFactory();
    case PaymentType.Bitcoin:
      return new BitcoinFactory();
    case PaymentType.VisaCard:
      return new VisaCardFactory();
    default:
      throw new Error("Invalid payment type.");
  }
}

const paypalService = getPaymentFactory(PaymentType.Paypal).createService();
paypalService.payMoney(100); // You paid 100 dollars by Paypal.

const bitcoinService = getPaymentFactory(PaymentType.Bitcoin).createService();
bitcoinService.payMoney(200); // You paid 200 dollars by Bitcoin.

const visaCardService = getPaymentFactory(PaymentType.VisaCard).createService();
visaCardService.payMoney(300); // You paid 300 dollars by VisaCard.
```

[`⬆ BACK TO TOP ⬆`](#table-of-contents)
