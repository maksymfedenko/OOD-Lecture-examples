import { Printer } from '../interfaces/Printer.interface';

export class ConsolePrinter implements Printer {
  // eslint-disable-next-line class-methods-use-this
  print(text: string): void {
    // eslint-disable-next-line no-console
    console.log(text);
  }
}
