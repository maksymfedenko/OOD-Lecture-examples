import { Animal } from './Animal.class';

export class Turtle extends Animal {
  constructor(nickname: string) {
    super('Turtle', nickname);
  }

  speak(): void {
    console.log(`${this.fullName} doesn't like to speak.`);
  }

  swim(): void {
    console.log(`${this.nickname} is swimming.`);
  }
}
