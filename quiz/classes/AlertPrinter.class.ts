import { Printer } from '../interfaces/Printer.interface';

export class AlertPrinter implements Printer {
  private readonly text: string;

  constructor(text: string) {
    this.text = text;
  }

  print(): void {
    // eslint-disable-next-line no-alert
    alert(this.text);
  }
}
