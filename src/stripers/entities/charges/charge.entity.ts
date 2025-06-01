import { Amount, Currency, PaymentSource } from "../../value-objects";


export class Charge {
  private id: string;
  private createdAt: Date;
  private status: 'pending' | 'completed' | 'failed';

  constructor(
    private readonly amount: Amount,
    private readonly currency: Currency,
    private readonly source: PaymentSource,
    private readonly customerId?: string
  ) {
    this.id = this.generateId();
    this.createdAt = new Date();
    this.status = 'pending';
    this.validate();
  }

  private generateId(): string {
    return `ch_${Math.random().toString(36).substr(2, 16)}`;
  }

  private validate(): void {
    // Additional business rules
    if (this.amount.getValue() > 1000000) {
      throw new Error("Amount exceeds maximum charge limit");
    }
  }

  
  markAsCompleted(): void {
    this.status = 'completed';
  }

  markAsFailed(): void {
    this.status = 'failed';
  }
  
  getId(): string {
    return this.id;
  }

  getAmount(): number {
    return this.amount.getValue();
  }

  getCurrency(): string {
    return this.currency.getCode();
  }
}