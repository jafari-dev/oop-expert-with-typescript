abstract class Broker {
  private accessToken: string;

  constructor(accessToken: string) {
    this.accessToken = accessToken;
  }

  abstract getProfile(): Record<string, string>;
  abstract getBasket(): Record<string, number>;
}

class AlphaBroker extends Broker {
  getProfile() {
    /* Specific Implementation */
  }

  getBasket() {
    /* Specific Implementation */
  }
}

class BetaBroker extends Broker {
  getProfile() {
    /* Specific Implementation */
  }

  getBasket() {
    /* Specific Implementation */
  }
}

abstract class StockExchangeMarket {
  protected broker: Broker;

  constructor(broker: Broker) {
    this.broker = broker;
  }

  abstract buyStock(stockId: string, amount: number): void;
  abstract sellStock(stockId: string, amount: number): void;
  abstract sellAllStocks(): void;
}

class NewYorkStockExchange extends StockExchangeMarket {
  buyStock(stockId: string, amount: number) {
    /* Specific Implementation */
  }

  sellStock(stockId: string, amount: number) {
    /* Specific Implementation */
  }

  sellAllStocks() {
    /* Specific Implementation */
  }
}

class TokyoStockExchange extends StockExchangeMarket {
  buyStock(stockId: string, amount: number) {
    /* Specific Implementation */
  }

  sellStock(stockId: string, amount: number) {
    /* Specific Implementation */
  }

  sellAllStocks() {
    /* Specific Implementation */
  }
}

// Use Case
