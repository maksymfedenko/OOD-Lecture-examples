export abstract class Question {
  protected question: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  protected answer: any;

  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }

  abstract print(): void;
}
