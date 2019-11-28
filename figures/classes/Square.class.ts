import { Rectangle } from './Rectangle.class';
import { Color } from '../interfaces/Color.interface';

export class Square extends Rectangle implements Color {
  color: string;

  set filling(color: string) {
    this.color = color;
  }

  constructor(size: number, color: string) {
    super(size, size);
    this.color = color;
  }

  getColor(): string {
    return this.color;
  }
}
