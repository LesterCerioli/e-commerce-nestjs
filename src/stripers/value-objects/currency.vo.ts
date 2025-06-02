export class Currency {
  private readonly validCurrencies = ['usd', 'eur', 'gbp'];

  constructor(private readonly code: string) {
    if (!this.validCurrencies.includes(code.toLowerCase())) {
      throw new Error(`Invalid currency code: ${code}`);
    }
  }

  getCode(): string {
    return this.code.toUpperCase();
  }
}