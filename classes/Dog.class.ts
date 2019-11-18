import { Animal } from './Animal.class';
import { Moveable } from '../interfaces/Moveable.interface';

export class Dog extends Animal implements Moveable {
  private isMoving = false;

  constructor(nickname: string) {
    super('Dog', nickname);
  }

  speak(): void {
    console.warn(`${this.fullName} is barking on you.`);
  }

  givePaw(): void {
    console.info(`${this.nickname} gives a paw to you.`);
  }

  move(): void {
    if (this.isMoving) return;

    console.info(this.fullName, 'starts moving');
    this.isMoving = true;

    setTimeout(() => {
      console.info(this.fullName, 'stops moving');
      this.isMoving = false;
    }, 3000);
  }
}
