/**
 * COMPOSITION WITH CLASSES
 * This is how composition could be done using the class syntax
 */

console.log(`\nCOMPOSITION WITH CLASSES`);

// Create a mixin
const AthleteMixin = superclass =>
  class extends superclass {
    trainsHard() {
      console.log(`${this.name} trains hard`);
    }

    isFit() {
      console.log(`${this.name} is fit`);
    }
  };

const WeightlifterMixin = superclass =>
  class extends superclass {
    liftHeavy() {
      console.log(`${this.name} lifts heavy`);
    }
  };

const GymnastMixin = superclass =>
  class extends superclass {
    handstandWalk() {
      console.log(`${this.name} handstand walks`);
    }
  };

class Athlete {
  constructor(name) {
    this.name = name;
  }
}

class Weightlifter extends WeightlifterMixin(AthleteMixin(Athlete)) {
  constructor(...args) {
    super(...args);
  }
}

class Gymnast extends GymnastMixin(AthleteMixin(Athlete)) {
  constructor(...args) {
    super(...args);
  }
}

let joe = new Weightlifter("Joe");
joe.trainsHard(); // Joe trains hard
joe.liftHeavy(); // Joe lifts heavy

let natalia = new Gymnast("Natalia");
natalia.trainsHard(); // Natalia trains hard
natalia.handstandWalk(); // Natalia handstand walks

class CrossfitAthlete extends GymnastMixin(WeightlifterMixin(AthleteMixin(Athlete))) {
  constructor(...args) {
    super(...args);
  }

  fittestInTheWorld() {
    console.log(`${this.name} is the fittest in the world`);
  }
}

let matt = new CrossfitAthlete("Matt Frazer");
matt.trainsHard(); // Matt Frazer trains hard
matt.liftHeavy(); // Matt Frazer lifts heavy
matt.handstandWalk(); // Matt Frazer handstand walks
matt.fittestInTheWorld(); // Matt Frazer is the fittest in the world
