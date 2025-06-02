import { Charge } from '../entities/charges/charge.entity';
import { Amount, Currency, PaymentSource } from '../value-objects';

export interface ChargeRepositoryContract {
  create(
    amount: Amount,
    currency: Currency,
    source: PaymentSource,
    customerId?: string
  ): Promise<Charge>;

  findById(id: string): Promise<Charge | null>;
  findAll(): Promise<Charge[]>;
  update(charge: Charge): Promise<Charge>;
  delete(id: string): Promise<void>;

  findByStatus(status: 'pending' | 'completed' | 'failed'): Promise<Charge[]>;
  findByCustomer(customerId: string): Promise<Charge[]>;
  findByAmountRange(min: number, max: number): Promise<Charge[]>;

  beginTransaction(): Promise<void>;
  commitTransaction(): Promise<void>;
  rollbackTransaction(): Promise<void>;
}