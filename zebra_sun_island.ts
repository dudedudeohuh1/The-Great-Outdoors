// Imports
import { OutdoorActivities } from 'the-great-outdoors';

// Constants
const hikingTops = 20;
const bikingTops = 30;

// Interfaces
interface HikingLocation {
   location: string;
   difficulty: string;
   distance: number;
}
interface BikingLocation {
   location: string;
   difficulty: string;
   distance: number;
   elevationGain: number;
}

// Functions
// Get Hiking Locations
function getHikingLocations(): Array<HikingLocation> {
   const locations: Array<HikingLocation> = [];
   for (let i = 0; i < hikingTops; i++) {
      const location = OutdoorActivities.GetHikingLocation();
      locations.push({
         location: location.name,
         difficulty: location.difficulty,
         distance: location.distance,
      });
   }
   return locations;
}
// Get Biking Locations
function getBikingLocations(): Array<BikingLocation> {
   const locations: Array<BikingLocation> = [];
   for (let i = 0; i < bikingTops; i++) {
      const location = OutdoorActivities.GetBikingLocation();
      locations.push({
         location: location.name,
         difficulty: location.difficulty,
         distance: location.distance,
         elevationGain: location.elevationGain,
      });
   }
   return locations;
}

// Main
function main() {
   const hikingLocations = getHikingLocations();
   const bikingLocations = getBikingLocations();

   // Output the locations
   console.log('Hiking Locations:');
   hikingLocations.forEach((location) => {
      console.log(
         `Location: ${location.location}, Difficulty: ${location.difficulty}, Distance: ${location.distance}`
      );
   });
   console.log('\n');
   console.log('Biking Locations:');
   bikingLocations.forEach((location) => {
      console.log(
         `Location: ${location.location}, Difficulty: ${location.difficulty}, Distance: ${location.distance}, Elevation Gain: ${location.elevationGain}`
      );
   });
}

// Run Main
main();