import { Printer } from '../interfaces/Printer.interface';

export class AlertPrinter implements Printer {
  private readonly text: string;

  // eslint-disable-next-line class-methods-use-this
  print(text: string): void {
    // eslint-disable-next-line no-alert
    alert(text);
  }
}
