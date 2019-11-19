import { Dog } from './classes/Dog.class';
import { Turtle } from './classes/Turtle.class';
import { Moveable } from './interfaces/Moveable.interface';
import { Pillar } from './classes/Pillar.class';
import { Animal } from './classes/Animal.class';

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
