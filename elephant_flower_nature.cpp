#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main()
{
	// Visit the woodlands
	cout << "Set out to explore the great outdoors in the woodlands.\n";

	// Declare variables
	string season;
	int temperature;
	vector<string> activities;

	// Ask for user input
	cout << "What season are you exploring the woodlands in?\n";
	cin >> season;
	cout << "What is the temperature in the woodlands?\n";
	cin >> temperature;

	// Choose activities based on season
	if(season == "spring")
	{
		activities.push_back("hiking");
		activities.push_back("wildflower spotting");
		activities.push_back("birdwatching");
	}
	else if(season == "summer")
	{
		activities.push_back("kayaking");
		activities.push_back("fishing");
		activities.push_back("forest bathing");
	}
	else if(season == "autumn")
	{
		activities.push_back("apple picking");
		activities.push_back("leaf peeping");
		activities.push_back("hunting");
	}
	else if(season == "winter")
	{
		activities.push_back("snowshoeing");
		activities.push_back("skiing");
		activities.push_back("snowmobiling");
	}

	// Check the temperature
	if(temperature >= 80)
	{
		activities.push_back("swimming");
	}
	else if(temperature < 80 && temperature > 50)
	{
		activities.push_back("camping");
	}
	else if(temperature <= 50)
	{
		activities.push_back("bonfires");
	}

	// Print out activities 
	cout << "Activites:\n";
	for(int i = 0; i < activities.size(); i++)
	{
		cout << "-" << activities[i] << "\n";
	}

	// Go explore!
	cout << "Head out into the great outdoors and explore the woodlands!\n";

	return 0;
}