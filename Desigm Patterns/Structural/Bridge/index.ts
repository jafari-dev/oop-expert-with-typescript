interface BrokerageAccount {
  getAccessToken: () => string;
  getValueOfWaller: () => number;
  getAmountOfStocks: () => Record<string, number>;
}

class AlphaBrokerageAccount implements BrokerageAccount {
  public getAccessToken() {
    // Handle implementation specific logic
  }
  public getAmountOfStocks() {
    // Handle implementation specific logic
  }
  public getValueOfWaller() {
    // Handle implementation specific logic
  }
}

class BetaBrokerageAccount implements BrokerageAccount {
  public getAccessToken() {
    // Handle implementation specific logic
  }
  public getAmountOfStocks() {
    // Handle implementation specific logic
  }
  public getValueOfWaller() {
    // Handle implementation specific logic
  }
}

class TradingAccount {
  private brokerageAccount: BrokerageAccount;

  constructor(brokerageAccount: BrokerageAccount) {
    this.brokerageAccount = brokerageAccount;
  }

  public buy(stock: string, amount: number) {
    // Handle implementation specific logic
  }

  public sell(stock: string, amount: number) {
    // Handle implementation specific logic
  }
}

class SpecialTradeAccount extends TradingAccount {
  constructor(brokerageAccount: BrokerageAccount) {
    super(brokerageAccount);
  }

  public buyOnTime(stock: string, amount: number, time: Date) {
    // Handle implementation specific logic
  }

  public sellOnTime(stock: string, amount: number, time: Date) {
    // Handle implementation specific logic
  }
}
