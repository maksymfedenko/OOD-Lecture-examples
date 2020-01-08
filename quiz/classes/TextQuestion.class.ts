import { Question } from './Question.class';
import { Printer } from '../interfaces/Printer.interface';

export class TextQuestion extends Question {
  maxLength: number;

  constructor(private printer: Printer, maxLength, question, answer) {
    super(question, answer);
    this.maxLength = maxLength;
  }

  validation() {
    return this.answer.length > this.maxLength;
  }

  print(): void {
    this.printer.print(
      `${this.question}: ${this.answer}\nisValid ${
        this.validation() ? 'true' : 'false'
      }`,
    );
  }
}
