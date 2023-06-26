interface CampingTrip {
    name: string;
    location: string;
    participants: string[];
    supplies: string[];
}

interface Campsite {
    terrain: string;
    elevation: number;
    amenities: string[];
    numberOfSites: number;
}

// Helper function to find the index of a participant in a camping trip
function findParticipantIndex(trip: CampingTrip, participant: string): number {
  let participantIndex = -1;
  for (let i = 0; i < trip.participants.length; i++) {
    if (trip.participants[i] === participant) {
      participantIndex = i;
      break;
    }
  } 
  return participantIndex;
}

// Helper function to find the index of a supply in a camping trip
function findSupplyIndex(trip: CampingTrip, supply: string): number {
  let supplyIndex = -1;
  for (let i = 0; i < trip.supplies.length; i++) {
    if (trip.supplies[i] === supply) {
      supplyIndex = i;
      break;
    }
  } 
  return supplyIndex;
}

// Helper function to find the index of a campsite in a camping trip
function findCampsiteIndex(campsites: Campsite[], campsite: Campsite): number {
  let campsiteIndex = -1;
  for (let i = 0; i < campsites.length; i++) {
    if (campsites[i] === campsite) {
      campsiteIndex = i;
      break;
    }
  } 
  return campsiteIndex;
}

// Create a new camping trip
function createTrip(name: string, location: string): CampingTrip {
  let trip: CampingTrip = {
    name: name,
    location: location,
    participants: [],
    supplies: []
  };
  return trip;
}

// Add a participant to a camping trip
function addParticipant(trip: CampingTrip, participant: string): void {
  if (findParticipantIndex(trip, participant) !== -1) {
    console.log('The participant is already on the trip.');
  } else {
    trip.participants.push(participant);
  }
}

// Remove a participant from a camping trip
function removeParticipant(trip: CampingTrip, participant: string): void {
  let participantIndex = findParticipantIndex(trip, participant);
  if (participantIndex === -1) {
    console.log('The participant is not on the trip.');
  } else {
    trip.participants.splice(participantIndex, 1);
  }
}

// Add a supply to a camping trip
function addSupply(trip: CampingTrip, supply: string): void {
  if (findSupplyIndex(trip, supply) !== -1) {
    console.log('The supply is already on the trip.');
  } else {
    trip.supplies.push(supply);
  }
}

// Remove a supply from a camping trip
function removeSupply(trip: CampingTrip, supply: string): void {
  let supplyIndex = findSupplyIndex(trip, supply);
  if (supplyIndex === -1) {
    console.log('The supply is not on the trip.');
  } else {
    trip.supplies.splice(supplyIndex, 1);
  }
}

// Choose a campsite for a camping trip
function chooseCampsite(campsites: Campsite[], trip: CampingTrip): Campsite {
  let chosenCampsite: Campsite = {
    terrain: '',
    elevation: 0,
    amenities: [],
    numberOfSites: 0
  };
  for (let i = 0; i < campsites.length; i++) {
    let currentCampsite = campsites[i];
    if (currentCampsite.elevation <= trip.location.elevation + 1000 && 
    currentCampsite.numberOfSites >= trip.participants.length) {
      chosenCampsite = currentCampsite;
    }
  }
  return chosenCampsite;
}

// Estimate the cost of a camping trip
function estimateCost(trip: CampingTrip, campsite: Campsite): number {
  let cost = 0;
  // Calculate cost of supplies
  for (let i = 0; i < trip.supplies.length; i++) {
    cost += 10;
  }
  // Calculate cost of campsite
  cost += campsite.numberOfSites * 10;
  return cost;
}

// Simulate a camping trip
function simulateTrip(trip: CampingTrip, campsite: Campsite): void {
  console.log(`Welcome to ${trip.name} at ${campsite.terrain}.`);
  console.log('Setting up campsite...');
  console.log('Setting up campfire...');
  console.log('Enjoying nature...');
  console.log('Good night!');
}

//program
let hikeInTheHills: CampingTrip = createTrip('Hike In The Hills', { elevation: 1200 });

addParticipant(hikeInTheHills, 'John');
addParticipant(hikeInTheHills, 'Jane');

addSupply(hikeInTheHills, 'tent');
addSupply(hikeInTheHills, 'sleeping bags');

let remoteCampsite: Campsite = {
  terrain: 'mountain',
  elevation: 1500,
  amenities: [],
  numberOfSites: 1
};

let campsiteCost = estimateCost(hikeInTheHills, remoteCampsite);
console.log(`The estimated cost of the trip is $${campsiteCost}.`);

simulateTrip(hikeInTheHills, remoteCampsite);