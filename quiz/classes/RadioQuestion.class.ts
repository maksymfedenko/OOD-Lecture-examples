import { Question } from './Question.class';
import { Printer } from '../interfaces/Printer.interface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class RadioQuestion extends Question {
  options: number;

  constructor(private printer: Printer, options, question, answer) {
    super(question, answer);
    this.options = options;
  }

  optionsCount() {
    if (this.options <= 4) {
      this.print();
    }
  }

  print(): void {
    this.printer.print(`${this.question}: ${this.answer}`);
  }
}
