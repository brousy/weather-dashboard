// city api http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
var API = ""


// Function 1 - this function should validate the value of the input.Next function: define the coordinates of the value.

// weather api
// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 

// continuing from the search input
// Function 2 - this function should use the api to pull the coordinates of the city(hint....geo).Next function: define the api data - weather.And also can add another function to set up local storage.


// Function 3 - this function should use the api to pull the weather data.Next function: define both current and forecast.


//  Function 4 - this function is very helpful, in the fact you are passing thru specific data info to then pass to the two functions that are only being called out.Next functions - calling out current and forecast.

//  Function 5a - this function should be passing thru the data needed to generate this card - Current Weather.  Review the demo to see what data you need. Remember data is being passed from func to func all the way from the fetch functions -- but in review of the api -- current is only needed for this card. No Next...after this

// Function 5b - this function should be passing thru the data needed for forecast from api and to only iterate thru for the 5 day forecast. Next function will generate the cards from the iteration.

// Function 6 - this function should be an individual card defined by the data being defined and pulled to display on a card.  As the iteration is done, each card should generate. No Next...

// Search History???
// from function 2 -- 
// Function 7 - this function sets up local storage setItem.  If you are compiling a list of searches -- what do you need?. Next function will pull from local storage and initialize independently.

// Function 8 - this function iterates what is pull from local storage and generate buttons.

// What do you need to do to kick off the buttons?

// Function 9 - this function is kicked off when the search history buttons are clicked, it validates the value of the button as a (hint) e.target which is defined as the original input is defined and validated.  Next function will get the coordinates of the city/location.
