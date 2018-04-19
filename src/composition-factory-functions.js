/**
 * COMPOSITION WITH FACTORY FUNCTIONS
 * Focus on what an object can do rather than trying to define what it is
 * The below example is called "concatenative inheritance"
 * Notice this does not use the 'new' keyword, and also does not use the 'this' keyword.
 * Avoiding 'this' comes at a memory cost though, as each instance will have copies of all properties (rather than being on the prototype)
 */

console.log(`\nCOMPOSITION WITH FACTORY FUNCTIONS`);

// We have some behaviors
const trainsHard = self => ({
  trainsHard: () => console.log(`${self.name} trains hard`)
});
const isFit = self => ({
  isFit: () => console.log(`${self.name} is fit`)
});
const weightLifterBehaviours = self => ({
  liftHeavy: () => console.log(`${self.name} lifts heavy`)
});
const gymnastBehaviours = self => ({
  handstandWalk: () => console.log(`${self.name} handstand walks`)
});

// Combined previous behaviours
const athleteBehaviours = self => Object.assign({}, trainsHard(self), isFit());

const Weightlifter = name => {
  const self = {
    name
  };

  return Object.assign(
    self,
    athleteBehaviours(self),
    weightLifterBehaviours(self)
  );
};

const Gymnast = name => {
  const self = {
    name
  };

  return Object.assign(self, athleteBehaviours(self), gymnastBehaviours(self));
};

let joe = Weightlifter("Joe");
joe.trainsHard(); // Joe trains hard
joe.liftHeavy(); // Joe lifts heavy

let natalia = Gymnast("Natalia");
natalia.trainsHard(); // Natalia trains hard
natalia.handstandWalk(); // Natalia handstand walks

// Now it is easy to use composition to create the CrossfitAthlete
const CrossfitAthlete = name => {
  const self = {
    name
  };

  const crossfitBehaviors = self => ({
    fittestInTheWorld: () =>
      console.log(`${self.name} is the fittest in the world`)
  });

  return Object.assign(
    self,
    athleteBehaviours(self),
    weightLifterBehaviours(self),
    gymnastBehaviours(self),
    crossfitBehaviors(self)
  );
};

let matt = CrossfitAthlete("Matt Frazer");
matt.trainsHard(); // Matt Frazer trains hard
matt.liftHeavy(); // Matt Frazer lifts heavy
matt.handstandWalk(); // Matt Frazer handstand walks
matt.fittestInTheWorld(); // Matt Frazer is the fittest in the world
