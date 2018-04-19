This project is for me to play around with composition vs inheritance.<br/>
2 examples of how to use composition are given using classes and factory functions.<br/>
I need to play around with this more still to get a fuller understanding of the benefits of using the classes version.

The code examples are based on creating the following objects:<br/>
	An Athlete - trains hard and is fit<br/>
	A Weightlifter - lifts heavy weight, they are a athlete<br/>
	A Gymnast - does handstand walks, they are a athlete<br/>
	A Crossfit Athlete - does weightlifting and gymnastics, they are the fittest in the world and are an athlete<br/>

Using inheritance to create the CrossfitAthlete would mean we have to either duplicate code,<br/>
or merge functionality meaning code would be pulled in for objects that will never need it (the gorilla banana problem).<br/>
In addition to the above, inheritance also has the fragile base class problem - i.e. I want to change this but I'm not sure what it might break!!
So instead we should think about using Composition.

Helpful articles:

	https://developers.caffeina.com/object-composition-patterns-in-javascript-4853898bb9d0
	https://alligator.io/js/class-composition/

How to run it:

	npm start (just runs in node, watches for changes using nodemon)
