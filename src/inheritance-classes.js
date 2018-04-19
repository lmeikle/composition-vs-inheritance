/**
 * INHERITANCE WITH CLASSES
 * To problem the problem with using inheritance
 */

console.log(`INHERITANCE WITH CLASSES`);

/**
 * I have the following 3 classes, they are pretty self explanatory
 */
class AbstractAthlete {
  constructor(name) {
    this.name = name;
  }
  trainsHard() {
    console.log(`${this.name} trains hard`);
  }
  isFit() {
    console.log(`${this.name} is fit`);
  }
}

class Weightlifter extends AbstractAthlete {
  constructor(name) {
    super(name);
  }

  liftHeavy() {
    console.log(`${this.name} lifts heavy`);
  }
}

class Gymnast extends AbstractAthlete {
  constructor(name) {
    super(name);
  }

  handstandWalk() {
    console.log(`${this.name} handstand walks`);
  }
}

let joe = new Weightlifter("Joe");
joe.trainsHard(); // Joe trains hard
joe.liftHeavy(); // Joe lifts heavy

let natalia = new Gymnast("Natalia");
natalia.trainsHard(); // Natalia trains hard
natalia.handstandWalk(); // Natalia handstand walks

console.log("Argh can't create CrossfitAthlete using inheritance")
