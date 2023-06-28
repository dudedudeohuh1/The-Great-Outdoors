-- Create a table to store the outdoors

local outdoors = {}

-- Initialize the outdoors

function outdoors:init()
	self.weather = "sunny"
	self.temperature = 80
	self.landscape = "plains"
	self.features = {
		"trees",
		"mountains",
		"rivers",
		"lakes"
	}
end

-- Check the weather of the outdoors

function outdoors:checkWeather()
	print("The weather outside is " .. self.weather)
end

-- Change the weather of the outdoors

function outdoors:changeWeather(newWeather)
	self.weather = newWeather
end

-- Check the temperature of the outdoors

function outdoors:checkTemperature()
	print("The temperature outside is " .. self.temperature .. " degrees")
end

-- Change the temperature of the outdoors

function outdoors:changeTemperature(newTemperature)
	self.temperature = newTemperature
end

-- Check the landscape of the outdoors

function outdoors:checkLandscape()
	print("The landscape is " .. self.landscape)
end

-- Change the landscape of the outdoors

function outdoors:changeLandscape(newLandscape)
	self.landscape = newLandscape
end

--Check the features of the outdoors

function outdoors:checkFeatures()
	print("The outdoor features include:")
	for i, feature in ipairs(self.features) do
		print(feature)
	end
end

-- Change the features of the outdoors

function outdoors:changeFeatures(newFeatures)
	self.features = newFeatures
end

return outdoors