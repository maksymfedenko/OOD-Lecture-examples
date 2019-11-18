export class Pillar {
  constructor(private height: number) {}

  getInfo(): void {
    console.info('It is a pillar, and it is', this.height, 'metres tall.');
  }
}
