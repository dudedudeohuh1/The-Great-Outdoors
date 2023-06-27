//'The Great Outdoors' - Typescript File

//Variables
let grassColor: string;
let skyColor: string;
let season: string;
let temperature: number;
let mountainRange: string[];
let campfire: boolean;

//Functions
function setGrassColor(color: string): void {
  grassColor = color;
}

function setSkyColor(color: string): void {
  skyColor = color;
}

function setSeason(time: string): void {
  season = time;
}

function setTemperature(temp: number): void {
  temperature = temp;
}

function setMountainRange(mountains: string[]): void {
  mountainRange = mountains;
}

function setCampfire(active: boolean): void {
  campfire = active;
}

//Classes
class Tree {
  type: string;
  height: number;
  constructor(type: string, height: number) {
    this.type = type;
    this.height = height;
  }
}

class Animal {
  type: string;
  diet: string;
  constructor(type: string, diet: string) {}
}

class River {
  length: number;
  speed: number;
  constructor(length: number, speed: number){
    this.length = length;
    this.speed = speed;
  }
}

//Other Code
setGrassColor("green");
setSkyColor("blue");
setSeason("summer");
setTemperature(30);
setMountainRange(["Mount Everest", "K2", "Kangchenjunga"]);
setCampfire(true);

let oakTree = new Tree("Oak", 20);
let redFox = new Animal("Fox", "Carnivore");
let amazon = new River(6400, 2);

console.log(`The great outdoors is filled with a ${grassColor} grass and ${skyColor} sky. Today is ${season} and the temperature is ${temperature}. 
The mountain range consists of ${mountainRange.join(", ")}. There is a ${oakTree.type} tree that is ${oakTree.height} feet tall. 
A ${redFox.type} is nearby, and it is a ${redFox.diet}. The river nearby is the ${amazon.length} long Amazon River, moving at ${amazon.speed} mph. 
The campfire is currently ${campfire ? "burning" : "not burning"}.`);