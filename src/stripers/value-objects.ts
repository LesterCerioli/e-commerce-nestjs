
export class Amount {
  constructor(private readonly value: number) {
    if (!Number.isFinite(value) throw new Error("Amount must be a number");
    if (value <= 0) throw new Error("Amount must be positive");
  }

  getValue(): number {
    return this.value;
  }
}

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

export class PaymentSource {
  constructor(private readonly token: string) {
    if (!token.startsWith('tok_')) {
      throw new Error("Invalid payment source token format");
    }
  }

  getToken(): string {
    return this.token;
  }
}