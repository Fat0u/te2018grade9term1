const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes") {
	console.log("Good job then go find a book to red");
}
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback == "I'M TIRED!!" || talkback == "I don't care") {
		console.log("No phone for the rest of the week. Go start that homework.");

	}

}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go take that shower or you won't even know what hit you");
}
else {
	console.log("Good, then go take a nap");
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("If you don't eat i will never buy you food from outside again");
}

let SleepEarly = READLINE.question("you have to go to sleep early today");
if(SleepEarly == "yes") {
console.log("Well you better!");
}
else {
	console.log("You are really joking with me ");
}


console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************

`)