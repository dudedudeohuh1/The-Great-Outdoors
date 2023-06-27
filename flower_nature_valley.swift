//MARK: -The Great Outdoors

//MARK: Constants
let kEarthRadius: Double = 6371.01 // in kilometers
let kEquinoxStartDate: Date = Calendar.current.date(bySettingHour: 12, minute: 0, second: 0, of: DateComponents(month: 6, day: 20))!
let kSolsticeStartDate: Date = Calendar.current.date(bySettingHour: 12, minute: 0, second: 0, of: DateComponents(month: 4, day: 20))!

//MARK: Structures
struct Location {
	var latitude: Double
	var longitude: Double
	
	func getDistance(from origin: Location) -> Double {
		let dLat = origin.latitude - self.latitude
		let dLon = origin.longitude - self.longitude
		
		let a = pow(sin(dLat / 2), 2) + cos(origin.latitude) * cos(self.latitude) * pow(sin(dLon / 2), 2)
		let c = 2 * atan2(sqrt(a), sqrt(1 - a))
		
		return kEarthRadius * c
	}
}

struct Season {
	var startDate: Date
	var endDate: Date
	
	func isOccuring(on date: Date) -> Bool {
		return startDate <= date && date < endDate
	}
	
	enum Kind {
		case equinox
		case solstice
	}
	
	init(kind: Kind) {
		switch kind {
		case .equinox:
			startDate = kEquinoxStartDate
			endDate = Calendar.current.date(byAdding: .month, value: 3, to: startDate)!
		case .solstice:
			startDate = kSolsticeStartDate
			endDate = Calendar.current.date(byAdding: .month, value: 3, to: startDate)!
		}
	}
	
	init(date: Date) {
		startDate = Calendar.current.date(bySettingHour: 0, minute: 0, second: 0, of: date)!
		endDate = Calendar.current.date(byAdding: .day, value: 1, to: startDate)!
	}
}

//MARK: Classes
class Trail {
	private(set) var name: String
	private(set) var locations: [Location]
	private(set) var isOpen: Bool
	
	init(name: String, locations: [Location], isOpen: Bool) {
		self.name = name
		self.locations = locations
		self.isOpen = isOpen
	}
	
	func getLength() -> Double {
		var length = 0.0
		if locations.count > 1 {
			for i in 0..<(locations.count - 1) {
				length += locations[i].getDistance(from: locations[i + 1])
			}
		}
		return length
	}
	
	func updateStatus(isOpen: Bool) {
		self.isOpen = isOpen
	}
}

//MARK: Enums
enum WeatherCondition: String {
	case sunny
	case cloudy
	case rainy
	case snowy
}

enum TemperatureUnits {
	case celcius
	case fahrenheit
}

//MARK: Functions
func getWeather(for location: Location, date: Date) -> (WeatherCondition, Int, TemperatureUnits) {
	return (.sunny, 25, .celcius)
}

func getSeason(for date: Date) -> Season {
	let equinox = Season(kind: .equinox)
	let solstice = Season(kind: .solstice)
	return (equinox.isOccuring(on: date) ? equinox : solstice)
}

//MARK: Utility
func randomString(length: Int) -> String {
	let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	return String((0..<length).map{ _ in letters.randomElement()! })
}