// Global variables

var API = "ce4db938844e03dfccf351ac50c00534"
countryCode = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW']
// button array
var savedSearches = [];
 
var tempToday = document.getElementById("temp-today");
// keys to mvoe from html to js
var windToday = document.getElementById("wind-today");

var humidityToday = document.getElementById("humidity-today");

var dateOne = document.getElementById("day-one")
var tempOne = document.getElementById("one-temp")
var windOne = document.getElementById("one-wind")
var humidityOne = document.getElementById("one-humidity")

var dateTwo = document.getElementById("day-two")
var tempTwo = document.getElementById("two-temp")
var windTwo = document.getElementById("two-wind")
var humidityTwo = document.getElementById("two-humidity")

var dateThree = document.getElementById("day-three")
var tempThree = document.getElementById("three-temp")
var windThree = document.getElementById("three-wind")
var humidityThree = document.getElementById("three-humidity")

var dateFour = document.getElementById("day-four")
var tempFour = document.getElementById("four-temp")
var windFour = document.getElementById("four-wind")
var humidityFour = document.getElementById("four-humidity")

var dateFive = document.getElementById("day-five")
var tempFive = document.getElementById("five-temp")
var windFive = document.getElementById("five-wind")
var humidityFive = document.getElementById("five-humidity")

https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}


// TODO 
// Function 1 - this function should validate the value of the input.Next function: define the coordinates of the value. Form
function formSubmitHandler(event) {
    event.preventDefault()

    if (event.target.matches(".btn")) {
        console.log(event.target.textContent)
        var buttonCityName = event.target.textContent.split(",")[0]
        var buttonCountryName = event.target.textContent.split(",")[1]
        getTodayCityWeather(buttonCityName, buttonCountryName)
        getLonLat(buttonCityName, buttonCountryName)
        return
    }

    var userInputArr = []
    //TODO google later
    userInputArr.push(inputEl.value.split(","))

    var cityName = userInputArr[0][0]
    var countryName = userInputArr[0][1].trim()

    console.log(userInputArr)
    console.log(cityName)
    console.log(countryName)

    if (countryCode.includes(countryName)) {
        if (cityName && countryName) {
            getTodayCityWeather(cityName, countryName)
            getLonLat(cityName, countryName)
            inputEl.value = ""

            var buttonArray = JSON.parse(localStorage.getItem("buttonArray"))
            if (!buttonArray) {
                buttonArray = []
            } 
            buttonArray.push({cityName, countryName})
            localStorage.setItem("buttonArray", JSON.stringify(buttonArray))

            // city history
            var savedCityBtn = document.createElement("button")
            savedCityBtn.textContent = cityName + ", " + countryName
            savedCityBtn.setAttribute("class", "btn btn-secondary")
            historyBtns.appendChild(savedCityBtn)

        } else {
            alert("Please enter a valid city name and country code")
        }
    }
    console.log(buttonArray)
}

//Function to get items from local storage and create buttons for them
function searchStorage() {
    var savedButtonArray = JSON.parse(localStorage.getItem("buttonArray"))

    if (!savedButtonArray) {
        savedButtonArray = []
    } 

    for (var i = 0; i < savedButtonArray.length; i++) {

        var savedCityName = savedButtonArray[i].cityName
        var savedCountryName = savedButtonArray[i].countryName

        var savedCityBtn = document.createElement("button")
        savedCityBtn.textContent = savedCityName + ", " + savedCountryName
        savedCityBtn.setAttribute("class", "btn btn-secondary")
        historyBtns.appendChild(savedCityBtn)
    }
}

searchStorage()
// weather api
// http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key} 

// continuing from the search input
// TODO 
// Function 2 - this function should use the api to pull the coordinates of the city(hint....geo).Next function: define the api data - weather.And also can add another function to set up local storage.


// Function 3 - this function should use the api to pull the weather data.Next function: define both current and forecast.
// TODO current weather
function displayTodayWeather (city, searchCity, searchCountry) {
    var currentDate = dayjs().format("dddd, MMMM, D YYYY");
    citySearchTerm.textContent = searchCity + ", " + searchCountry + " - " + currentDate;

    var tempKelvin = city.main.temp
    var tempImperial = (((tempKelvin-273.15)1.8)+32).toFixed(2)

    var windMeterperSec = city.wind.speed
    var windImperial = (windMeterperSec2.237).toFixed(2)

    var icon = city.weather[0].icon
    console.log(icon)

    tempToday.textContent = "Temp: " + tempImperial + "°F"
    windToday.textContent = "Wind: " + windImperial + " MPH"
    humidityToday.textContent = "Humidity: " + city.main.humidity + "%"

    var weatherIcon = document.createElement("img")
    weatherIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + icon + "@2x.png")
    citySearchTerm.appendChild(weatherIcon)

}
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
