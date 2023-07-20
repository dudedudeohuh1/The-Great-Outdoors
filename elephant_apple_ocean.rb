# Set the initial coordinates and time of the day
latitude = 37.6
longitude = -122.3
time = "morning"

# Create a global array to store the path
path = []

# Check if the coordinates are valid and determine the type of terrain
if latitude.between?(0, 90) && longitude.between?(-180, 180)
  terrain = "forest"
end

# Gather supplies
supplies = ["hat", "shoes", "backpack", "water bottle"]

# Create a function to identity the local wildlife
def wildlife_check(location,time)
  wildlife = []
  if location == "forest" && time == "morning"
    wildlife << "owls" << "deer"
  elsif location == "forest" && time == "night"
    wildlife << "bats" << "wolves"
  end
  return wildlife
end

# Create a loop to hike through the forest
while latitude <= 42
  # Create a hash to store the coordinates, terrain, time, wildlife, and supplies
  coordinates = {
    lat: latitude,
    lon: longitude,
    terrain: terrain,
    time: time,
    wildlife: wildlife_check(terrain,time),
    supplies: supplies
  }
  
  # Add coordinates to the path
  path << coordinates

  # Increase latitude and switch time of day
  latitude += 0.5
  if time == "morning"
    time = "night"
  else
    time = "morning"
  end
end

# Create a helper function to check supplies
def check_supplies(supplies)
  # Iterate through the supplies and Check if any are missing
  supplies.each do |supply|
    if !supply
      return "You are missing #{supply}"
    end
  end
  return "You have all the supplies you need!"
end

# Check supplies
puts check_supplies(supplies)

# Print path
path.each do |point|
  puts "Today's coordinates are #{point[:lat]}, #{point[:lon]}"
  puts "The terrain is #{point[:terrain]}"
  puts "The time of day is #{point[:time]}"
  puts "The wildlife at this point is #{point[:wildlife]}"
  puts "The supplies you have are #{point[:supplies]}"
end