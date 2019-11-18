export abstract class Animal {
  private kind: string;
  protected nickname: string;
  private pawsAmount: number;

  set paws(amount: number) {
    if (amount < 0) throw new Error('Animal should have at least one paw!');
    this.pawsAmount = amount;
  }

  get paws(): number {
    return this.pawsAmount;
  }

  get fullName(): string {
    return `${this.kind} ${this.nickname}`;
  }

  constructor(kind: string, nickname: string, paws: number = 4) {
    this.kind = kind;
    this.nickname = nickname;
    this.paws = paws;
  }

  getNickname(): string {
    return this.nickname;
  }

  abstract speak(): void;

  sleep(): void {
    console.log('Zzzzzzzz......');
  };
}
