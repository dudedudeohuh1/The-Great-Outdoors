#Define class
class TheGreatOutdoors
  
  #Initialize instance variables
  def initialize(wildlife, terrain, vegetation)
    @wildlife = wildlife
    @terrain = terrain
    @vegetation = vegetation
  end
  
  #Define accessors
  attr_accessor :wildlife, :terrain, :vegetation
  
  #Define method to display wildlife
  def display_wildlife
    @wildlife.each do |animal|
      puts "You can find a #{animal} in The Great Outdoors"
    end
  end
  
  #Define method to display terrain
  def display_terrain
    @terrain.each do |feature|
      puts "You can find #{feature} in The Great Outdoors"
    end
  end
  
  #Define method to display vegetation
  def display_vegetation
    @vegetation.each do |plant|
      puts "You can find #{plant} in The Great Outdoors"
    end
  end
  
  #Define method to display all
  def display_all
    display_wildlife 
    display_terrain
    display_vegetation
  end
  
end

#Create a The Great Outdoors instance
great_outdoors = TheGreatOutdoors.new(['Fox', 'Wolf', 'Deer'], ['Mountains', 'Lakes', 'Rivers'], ['Trees', 'Grass', 'Shrubs'])

#Display all wildlife, terrain and vegetation
great_outdoors.display_all