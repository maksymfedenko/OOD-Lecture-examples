import { Question } from './Question.class';
import { Printer } from '../interfaces/Printer.interface';

export class RadioQuestion extends Question {
  options: Array<{ label: string; value: any }>;

  constructor(private printer: Printer, options, question, answer) {
    super(question, answer);
    this.options = options;
  }

  optionsCount() {
    return this.options.length;
  }

  print(): void {
    this.printer.print(JSON.stringify(this.options));
  }
}
