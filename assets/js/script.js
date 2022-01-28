/*Global Variable Memory */
const submitButton = document.getElementById("search-button");
const inputBox = document.getElementById("city-input");
const apiKey = "e005f427432a127e4dbd6f5d523c847e";
const cityName = document.getElementById("city-name");
// const weatherIcon = document.getElementById("current-pic");
const currentTemperature = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWindSpeed = document.getElementById("wind-speed");
const currentUV = document.getElementById("UV-index");
const currentIcon = document.getElementById("current-icon");

/* Function to load location using longitude and latitude


/*Function to fetch data from Current Weather API*/
function getCurrentWeather(event) {
  event.preventDefault();

  let currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&appid=${apiKey}`;
  fetch(currentWeatherApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let nameValue = data.name;
      cityName.innerHTML = nameValue;
      console.log(nameValue);

      // Need to add date using moment //

      let currentIconValue = data.weather[0].icon;
      currentIcon.innerHTML = "Icon:" + currentIconValue;
      currentIcon.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + currentIconValue + "@2x.png"
      );
      console.log(currentIconValue);

      let tempValue = data.main.temp;
      let celsiusTemp = tempValue - 273.15;
      currentTemperature.innerHTML =
        "Temp:" + " " + Math.floor(celsiusTemp) + "°C";
      console.log(tempValue);

      let humidityValue = data.main.humidity;
      currentHumidity.innerHTML = "Humidity:" + " " + humidityValue + " " + "%";
      console.log(humidityValue);

      let windSpeedValue = data.wind.speed;
      currentWindSpeed.innerHTML = "Wind:" + " " + windSpeedValue + " " + "MPH";
      console.log(windSpeedValue);

      /* Fetching data for latitude and longitude to display UV info*/

      let latitude = data.coord.lat;
      let longitude = data.coord.long;
      console.log(data.coord);

      // Not fetching lat and long with below API call but fetching with above call
      let oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}`;
      fetch(oneCallApi)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          
          
          /* Adding button is JS for UV data */
          
          const uvButton = document.createElement("button");
          uvButton.classList.add("btn");

          // passing the value and get the UV data 
          uvButton.innerHTML = data.uvi;

          // if else statement to indicate whether UV is favorable (green), moderate(yellow) or severe(red)
          if (data.uvi < 3) {
            uvButton.classList.add("btn-success");
          }
          else if (data.uvi < 7) {
            uvButton.classList.add("btn-warning");
          }
          else {
            uvButton.classList.add("btn-danger");
          }

          /* appending uvButton to currentUV div*/
          currentUV.innerHTML = "UV Index:" + " ";
          currentUV.appendChild(uvButton);

        });
    });
}

submitButton.addEventListener("click", getCurrentWeather);

// function getUV(lat, long){
//     let
//     let oneCallApi = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=minutely,hourly,alerts&appid=${apiKey}`;
//     fetch(oneCallApi)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data);
//     })

// }
