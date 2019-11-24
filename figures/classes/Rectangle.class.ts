import { Figure } from './Figure.class';

export class Rectangle extends Figure {
  constructor(width: number, height: number) {
    super(width, height);
  }

  transform() {
    [this.width, this.height] = [this.height, this.width];
  }
}
