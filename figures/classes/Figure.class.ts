export abstract class Figure {
  protected height: number;

  protected width: number;

  private positionX: number;

  private positionY: number;

  set coordinateX(position: number) {
    this.positionX = position;
  }

  set coordinateY(position: number) {
    this.positionY = position;
  }

  get position(): string {
    return `Position: 
                x: ${this.positionX}
                y: ${this.positionY}`;
  }

  constructor(width: number, height: number, x = 1, y = 1) {
    this.height = height;
    this.width = width;
    this.coordinateX = x;
    this.coordinateY = y;
  }

  getSize(): string {
    return `Size: ${this.width} * ${this.height}`;
  }

  horisontalMovement(step: number): void {
    this.positionX += step;
  }

  verticalMovement(step: number): void {
    this.positionY += step;
  }

  abstract transform(): void;
}
