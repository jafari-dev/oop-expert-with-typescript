interface PaymentService {
  payMoney: (amount: number) => void;
}

class Paypal implements PaymentService {
  public payMoney(amount: number) {
    console.log(`You pay ${amount} dollars by Paypal.`);
  }
}

class MasterCard implements PaymentService {
  public payMoney(amount: number) {
    console.log(`You pay ${amount} dollars by MasterCard.`);
  }
}


abstract class PaymentServiceFactory {
  public abstract createPaymentService(): PaymentService;

  public pay(amount: number): void {
    const paymentService = this.createPaymentService();

    paymentService.payMoney(amount);
  }
}

class PaypalFactory extends PaymentServiceFactory {
  public createPaymentService() {
    return new Paypal();
  }
}

class MasterCardFactory extends PaymentServiceFactory {
  public createPaymentService() {
    return new MasterCard();
  }
}
