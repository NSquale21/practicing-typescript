// create variable w/name 
let myName: string = 'Nicole';

// create const w/number of states
const NUM_STATES: number = 50;

// compute 5 + 4 & store in variable
let sum = 5 + 4;

// write sayHello function that displays alert
function sayHello(): void {
	alert('Hello World!');
}

// call sayHello function
sayHello();

// write checkAge function that takes two arguments (name, age)
function checkAge(name: string, age: number) {
	if (age < 21) {
		alert(`Sorry ${name}, you aren't old enough to view this page!`);
	}
}

// call function 4 times
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// create array of your favorite vegetable
let favVeggies: string[] = ['Asparagus', 'Brussel Sprouts', 'Sweet Potatos', 'Artichokes'];

// loop through favVeggies array & display to console
/* for (let i = 0; i < favVeggies.length; i++) {
	console.log(favVeggies[i]);
} */

favVeggies.forEach(veggie => console.log(veggie));

// create an array of 5 objects that contain name & age properties

interface IFriend {
	name: string,
	age: number
}

let friends: IFriend[] = [
	{name: 'Ryan', age: 29}, 
	{name: 'Kylie', age: 18}, 
	{name: 'Rachael', age: 32}, 
	{name: 'Kim', age: 28}, 
	{name: 'Andy', age: 15}
];

// use loop to call the checkAge function for each object in the array
/*for (let i = 0; i < newArr.length; i++) {
	console.log(checkAge(newArr[i].name, newArr[i].age));
} */

for (const friend of friends) {
	console.log(checkAge(friend.name, friend.age));
}

// create a function called getLength that takes any word as an argument
function getLength (word: string) {
	return word.length;
}

// call the getLength function
let result: number = getLength('Hello World');

// if number is even display 'The world is nice and even!
// if number is odd display 'The world is an odd place'
if (result % 2 === 0) {
	console.log('The world is nice and even!');
} else {
	console.log('The world is an odd place.');
}