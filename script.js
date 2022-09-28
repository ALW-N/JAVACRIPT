/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
let searchDiv = document.getElementById('city-input')
// let searchClickDiv = document.getElementById('')


const getWeatherData = (city) => {
  
  // //HINT: Use template literals to create a url with input and an API key
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd7321cad77msh405233d0031c669p18ce7djsnba75e2ed1451',
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
  }
};
  return fetch(`https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`, options)
  .then(response => response.json())
  .then(response => response)
  .catch(err => console.error(err));
  //CODE GOES HERE

}

  /**
   * Retrieve city input and get the weather data
   * HINT: Use the promise returned from getWeatherData()
   */
  const searchCity = async () => {
    
    // CODE GOES HERE
    let city = document.getElementById('city-input').value;
    console.log(city)
  const data = await getWeatherData(city)
    showWeatherData(data)
  }

  /**
   * Show the weather data in HTML
   * HINT: make sure to console log the weatherData to see how the data looks like
   */
  const showWeatherData = (weatherData) => {
    //CODE GOES HERE
    // FOR TESTING----console.log(weatherData.current_observation.condition.temperature)

    document.getElementById('temp').innerText = weatherData.current_observation.condition.temperature
    
  document.getElementById('weather-type').innerText = weatherData.current_observation.condition.text
    document.getElementById('humidity').innerText =weatherData.current_observation.atmosphere.humidity
    document.getElementById('pressure').innerText =weatherData.current_observation.atmosphere.pressure

   

  }