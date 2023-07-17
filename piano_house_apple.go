package greatoutdoors

import (
	"fmt"
	"math"
	"time"
)

// define constants
const (
	sunny = iota
	cloudy
	raining
)

// define structs
type place struct {
	name string
	lat  float64
	long float64
}

type activity struct {
	name   string
	rating int
}

// define functions
func getWeather(lat, long float64) int {
	// use openweather api to check weather
	// return one of the constants defined
}

func recommendActivity(weather int) activity {
	// recommend an activity based on the weather
	return activity{}
}

func getPlaceInfo(name string) place {
	// use a location api to get lat and long
	return place{name: name}
}

func getDistance(from place, to place) float64 {
	// use haversine formula to calculate distance between two points
	distance := 0.0
	return distance
}

func printDistance(from string, to string) {
	// get info about both places
	fromInfo := getPlaceInfo(from)
	toInfo := getPlaceInfo(to)
	// calculate distance between them
	distance := getDistance(fromInfo, toInfo)
	// print the result
	fmt.Printf("The distance between %s and %s is %f km",
		fromInfo.name, toInfo.name, distance)
}

func main() {
	// main loop
	for {
		// get current location
		lat, long := getCurrentLocation()
		// get weather
		weather := getWeather(lat, long)
		// recommend an outdoor activity
		activity := recommendActivity(weather)
		// print out details
		fmt.Println("Today's activity is: ", activity.name)
		fmt.Println("Rating: ", activity.rating)
		// wait for 1 hour
		time.Sleep(time.Hour)
	}
}