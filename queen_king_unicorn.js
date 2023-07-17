//Declare an array to store data 
let outdoorData = [];

//Create a function to retrieve data from outdoor activities
function getOutdoorData(){
	//Make an AJAX call to the API
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://data.outdooractivities.com/");
  xhr.onload = function(){
    outdoorData = JSON.parse(xhr.responseText);
  };
  xhr.send();
}

//Create a function to retrieve data from the user
function getUserInput(){
  //Declare variables to store data
  let location, activity, length;
  
  //Prompt the user for input
  location = prompt("Please enter the location you would like to explore: ");
  activity = prompt("What type of outdoor activity would you like to do? ");
  length = prompt("How long will this activity last? ");

  //Return the user data
  return {
    location: location,
    activity: activity,
    length: length
  };
}

//Create a function to filter the outdoor data
function filterOutdoorData(outdoorData, userData){
  //Declare a variable to store the filtered data
  let filteredData = [];

  //Loop through the outdoor data to find matching entries
  for (let i = 0; i < outdoorData.length; i++){
    //Create variables to store the current entry
    let outdoorLocation = outdoorData[i].location;
    let outdoorActivity = outdoorData[i].activity;
    let outdoorLength = outdoorData[i].length;

    //Check to see if the entry matches the user data
    if (userData.location === outdoorLocation 
        && userData.activity === outdoorActivity 
        && userData.length === outdoorLength){
      //Add the entry to the filtered array
      filteredData.push(outdoorData[i]);
    }
  }
  //Return the filtered data
  return filteredData;
}

//Create a function to display the filtered data
function displayOutdoorData(filteredData){
  //Check to make sure there is data
  if (filteredData.length > 0){
    //Loop through the data
    for(let i = 0; i < filteredData.length; i++){
      //Declare variables to store data
      let location = filteredData[i].location;
      let activity = filteredData[i].activity;
      let length = filteredData[i].length;
      let cost = filteredData[i].cost;

      //Display the data in the console
      console.log(location + " - " + activity + " (" + length + ") " + " - $" + cost);
    }
  } else {
    //Display an error
    console.log("No matching data found");
  }
}

//Call the functions
getOutdoorData();
let userData = getUserInput();
let filteredData = filterOutdoorData(outdoorData, userData);
displayOutdoorData(filteredData);