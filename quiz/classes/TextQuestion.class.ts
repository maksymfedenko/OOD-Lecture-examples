import { Question } from './Question.class';
import { Printer } from '../interfaces/Printer.interface';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TextQuestion extends Question {
  maxLength: number;

  constructor(private printer: Printer, maxLength, question, answer) {
    super(question, answer);
    this.maxLength = maxLength;
  }

  validation() {
    if (this.maxLength <= 16) {
      this.print();
    }
  }

  print(): void {
    this.printer.print(`${this.question}: ${this.answer}`);
  }
}
