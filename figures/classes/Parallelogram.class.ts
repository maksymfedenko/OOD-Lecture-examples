import { Rectangle } from './Rectangle.class';

export class Parallelogram extends Rectangle {
  private angle: number;

  set angleDegrees(degrees) {
    this.angle = degrees;
  }

  constructor(width: number, height: number, angle: number) {
    super(width, height);
    this.angle = angle;
  }

  getSize(): string {
    return `${super.getSize()}\nAngle: ${this.angle}`;
  }

  transform(): void {
    super.transform();
    this.angle = 180 - this.angle;
  }
}
