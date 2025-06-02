// amount.vo.ts
export class Amount {
  constructor(private readonly value: number) {
    if (!Number.isFinite(value)) 
      throw new Error("Amount must be a finite number");
    if (value <= 0) 
      throw new Error("Amount must be positive");
  }
  // ...
}