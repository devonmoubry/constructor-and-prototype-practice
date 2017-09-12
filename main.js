//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (status, color, hungry, owner) {
  'use strict';
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}
// Instances of Dog
// Needed: sadie, moonshine, atticus

let sadie = new Dog('normal', 'black', false);
let moonshine = new Dog('normal', 'white', true);
let atticus = new Dog();
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  'use strict';
  this.pet = function (pet) {
    pet.status = 'happy';
  }
  this.feed = function (pet) {
    pet.hungry = false;
  }
  this.cool = cool;
}

// Instances of Human
// Needed: mason, julia
let mason = new Human(false);
let julia = new Human(true);
