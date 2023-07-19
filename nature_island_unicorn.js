//File 1 

let outdoorAdventurers = [];

// Create a function that adds an outdoor adventurer to the array.
function addOutdoorAdventurer(name, age, location) {
  let outdoorAdventurer = {
    name: name,
    age: age,
    location: location
  };

  outdoorAdventurers.push(outdoorAdventurer);
}

// Create a function that removes an outdoor adventurer from the array.
function removeOutdoorAdventurer(name) {
    let index = outdoorAdventurers.findIndex(x => x.name === name);
    outdoorAdventurers.splice(index, 1);
}

// Create a function that returns an array of all outdoor adventurers 
// who are over the age of 30.
function experiencedAdventurers() {
    return outdoorAdventurers.filter(x => x.age > 30);
}

// Create a function that returns an array of all outdoor adventurers 
// in a given location.
function adventurersByLocation(location) {
    return outdoorAdventurers.filter(x => x.location === location);
}

//File 2
// Create a function that adds a new hobby to an existing 
// outdoor adventurer in the array.
function addHobby(name, hobby) {
    let index = outdoorAdventurer.findIndex(x => x.name === name);
    outdoorAdventurers[index].hobby = hobby;
}

// Create a function that updates an existing outdoor adventurer's age 
// in the array.
function updateAge(name, age) {
    let index = outdoorAdventurers.findIndex(x => x.name === name);
    outdoorAdventurers[index].age = age;
}

// Create a function that returns an array of all outdoor adventurers 
// with given hobbies.
function adventurersByHobby(hobby) {
    return outdoorAdventurers.filter(x => x.hobby === hobby);
}

// Create a function that returns an array of all outdoor adventurers 
// who are within a given range of ages.
function adventurersByAgeRange(minAge, maxAge) {
    return outdoorAdventurers.filter(x => x.age >= minAge && x.age <= maxAge);
}

// Create a function that returns an object with the total number 
// of outdoor adventurers by location.
function countAdventuresByLocation() {
    let countByLocation = {};
    outdoorAdventurers.forEach( x => {
       if(!countByLocation[x.location]) {
            countByLocation[x.location] = 1;
       } else {
            countByLocation[x.location]++;
       }
    });

    return countByLocation;
}