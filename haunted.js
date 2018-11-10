const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 99,
  intellect: 151,
  strength: 300,
  charm: 100,
  weapon: "supernatural Localizer",
  item: "flashlight",
};
   
console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  console.log (`${player.name} Enters and feels that she is not alone,`)
  console.log (`${player.name} takes out her ${player.item} and look around,`);
  console.log(`${player.name} was petrified he wasn't able to move for a moment`);
  console.log(`${player.name} Just saw one of the most horrifying thing ever`)
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...
  once you see the house it can't never get out of your brain til you face your fears.`);
  console.log(`${player.name} Was having nightmares and flashbacks for over 5 months now.`)
  console.log (`${player.name} thinks about going back to the house`)
  }
let goBacktohouse = READLINE.question("Will you go back to  the house? (yes or no) ");
if(goBacktohouse == "y" || goBacktohouse == "yes") {
player.courage++;
console.log(`${player.name} goes back with his ${player.weapon} he wasn't scared this time he was just here to face his fears and go back living his normal life
he enters the house with one goal facing his fears`)
console.log(`${player.name} came in to the house heard more screaming from a door.`) 
let openDoor = READLINE.question("Will you look into it? (yes or no) ");
if (openDoor == "y" || openDoor == "yes") {
 player.courage++;
  console.log(`${player.name} opens the door and saw a little girl he tought she was stuck in the house but once he got closer the little girl had sharp teeth with blood all over them`)
console.log(`${player.name} He ran back to the hallway but he stopped because he realised he was running away from a fear he went back and used her ${player.item} to blind the little devil.`)
console.log (`${player.name} he finally surmounted his fears`)

} else {
console.log(`${player.name} you're such a chicken.`)

}



} else {
 console.log(`${player.name} Sorry you Lost!!`)
}
                                                              

