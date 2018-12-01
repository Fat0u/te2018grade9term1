
const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");



if(enterHouse == "y" || enterHouse == "yes"){
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story
  console.log();

  console.log (`${player.name} see a dead body..`)
  let investigation = READLINE.question(" do you want to investigate (yes or no)");
if(investigation=="yes"){
  console.log(`${player.name} investigates the body`);
  console.log(`${player.name} Finds the cause of death`);
  console.log(`${player.name} finds the killer and he's running around the house`)
   } else {
   console.log(`${player.name} Decided to walk away and wait for a proffesional`)
 console.log(`${player.name} after the proffessionals came they found the body and the killer was in the hous `)
}

  let chase = READLINE.question("Will you chase the killer? (yes or no)");
  if (chase = "yes" ){
  console.log(`${player.name} chases him and had a bit of struggle but the killer got cought`)
  



}else{
  console.log (`${player.name} Just stands there and the killer runs away`)
  


}


  } else {
  player.courage --;
  console.log(`${player.name} decides not to open the door. However...
  dont look behind you ;)`);
  console.log ("game ends..")

  }

  

  
console.log("Thanks for playing!");
