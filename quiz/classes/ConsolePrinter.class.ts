import { Printer } from '../interfaces/Printer.interface';

export class ConsolePrinter implements Printer {
  private readonly text: string;

  constructor(text: string) {
    this.text = text;
  }

  print(): void {
    // eslint-disable-next-line no-console
    console.log(this.text);
  }
}
