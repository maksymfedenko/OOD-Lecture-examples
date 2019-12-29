import { Dog } from './classes/Dog.class';
import { Turtle } from './classes/Turtle.class';
import { Moveable } from './interfaces/Moveable.interface';
import { Pillar } from './classes/Pillar.class';
import { Animal } from './classes/Animal.class';

import { Square } from './figures/classes/Square.class';
import { Rectangle } from './figures/classes/Rectangle.class';
import { Parallelogram } from './figures/classes/Parallelogram.class';

import { RadioQuestion } from './quiz/classes/RadioQuestion.class';
import { ConsolePrinter } from './quiz/classes/ConsolePrinter.class';
import { TextQuestion } from './quiz/classes/TextQuestion.class';

const archieDog = new Dog('Archie');
const donatelloTurtle = new Turtle('Donatello');

console.group(archieDog.getNickname());
archieDog.speak();
archieDog.givePaw();
console.groupEnd();

console.group(donatelloTurtle.getNickname());
donatelloTurtle.speak();
donatelloTurtle.swim();
console.groupEnd();

archieDog.paws = 2;
console.group('Encapsulation');
console.log(archieDog.getNickname(), 'has', archieDog.paws, 'paws.');
// console.log(archieDog.nickname); // error
console.groupEnd();
// archieDog.paws = -3; // error

console.group('Polymorphism');
archieDog.speak();
donatelloTurtle.speak();
console.groupEnd();

console.group('Abstraction');
// const tryCreateAbstractAnimal = new Animal('Parrot', 'Kesha');
// implements Moveable
const ableToMove: Moveable = new Dog('Baron');
ableToMove.move();
// doesn't implement Moveable
// const unableToMove: Moveable = new Pillar(10);
console.groupEnd();

// Single responsibility
const animals: Animal[] = [
  new Dog('Baron'),
  new Turtle('Archibald'),
  new Dog('Dixy'),
  new Turtle('Tamara'),
];

function filterOnlyTurtles(animalList: Animal[]): Turtle[] {
  return animals.filter((animal) => animal instanceof Turtle) as Turtle[];
}

function addPawToAnimal(animal: Animal): void {
  animal.paws += 1;
}

const turtles = filterOnlyTurtles(animals);
turtles.forEach(addPawToAnimal);

console.warn('filterOnlyTurtles result');
console.dir(filterOnlyTurtles(animals));

//
// IRA
//

const rectangle = new Rectangle(30, 20);
console.group('Rectangle');

console.log(rectangle.position);
rectangle.coordinateY = 3;
rectangle.coordinateX = 3;
console.log(rectangle.position);

rectangle.horisontalMovement(-2);
rectangle.verticalMovement(2);
console.log(rectangle.position);

console.group(rectangle.getSize());
rectangle.transform();
console.log(rectangle.getSize());
console.groupEnd();

console.groupEnd();

const parallelogram = new Parallelogram(30, 50, 45);
console.group('Parallelogram');

console.log(parallelogram.position);
parallelogram.horisontalMovement(-1);
console.log(parallelogram.position);

console.group(parallelogram.getSize());
parallelogram.angleDegrees = 30;
console.group(parallelogram.getSize());

parallelogram.transform();
console.log(parallelogram.getSize());
console.groupEnd();

console.groupEnd();

const square = new Square(20, 'blue');
console.group('Square');

console.log(square.position);
console.log(square.getSize());

console.group(square.getColor());
square.filling = 'lightblue';
console.log(square.getColor());
console.groupEnd();

console.groupEnd();

const radio = new RadioQuestion(
  new ConsolePrinter(),
  ['answ1', 'answ2', 'answ3', 'answ4'],
  'What?',
  "I don't know",
);
console.group('Radio');

console.log(radio.optionsCount());
console.log(radio.print());
console.groupEnd();

const text = new TextQuestion(new ConsolePrinter(), 10, 'What?', 'Nothing');
console.group('Text');

console.log(text.validation());
console.log(text.print());
console.groupEnd();
