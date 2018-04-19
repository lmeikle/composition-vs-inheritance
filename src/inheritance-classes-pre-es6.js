/**
 * INHERITANCE WITH CLASSES - PRE ES6 (although ES6 is still this under the syntactic sugar)
 */

/**
 * I have the following 3 classes, they are pretty self explanatory
 */
function AbstractAthlete(name) {
  this.name = name;
}
AbstractAthlete.prototype.trainsHard = function() {
  console.log(`${this.name} trains hard`);
};
AbstractAthlete.prototype.isFit = function() {
  console.log(`${this.name} is fit`);
};

Weightlifter.prototype = Object.create(AbstractAthlete.prototype);
Weightlifter.prototype.constructor = Weightlifter; // fix the constructor or it will be AbstractAthlete
function Weightlifter(name) {
  AbstractAthlete.call(this, name); // call the AbstractAthlete constructor
}
Weightlifter.prototype.liftHeavy = function() {
  console.log(`${this.name} lifts heavy`);
};

Gymnast.prototype = Object.create(AbstractAthlete.prototype);
Gymnast.prototype.constructor = Gymnast;
function Gymnast(name) {
  AbstractAthlete.call(this, name);
}
Gymnast.prototype.handstandWalk = function() {
  console.log(`${this.name} handstand walks`);
};

let joe = new Weightlifter("Joe");
joe.trainsHard(); // Joe trains hard
joe.liftHeavy(); // Joe lifts heavy

let natalia = new Gymnast("Natalia");
natalia.trainsHard(); // Natalia trains hard
natalia.handstandWalk(); // Natalia handstand walks

console.log("Argh can't create CrossfitAthlete using inheritance")
