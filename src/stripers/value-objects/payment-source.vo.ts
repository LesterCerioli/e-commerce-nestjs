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