/*Global Variable Memory */
const submitButton = document.getElementById("search-button");
const inputBox = document.getElementById("city-input");
const apiKey = "e005f427432a127e4dbd6f5d523c847e"
const cityName = document.getElementById("city-name");
// const weatherIcon = document.getElementById("current-pic");
const currentTemperature = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWindSpeed = document.getElementById("wind-speed");
const currentUV = document.getElementById("UV-index");

/* Function to load location using longitude and latitude


/*Function to fetch data from Current Weather API*/
function getCurrentWeather(event){
    event.preventDefault()
    // console.log(inputBox.value)
    let currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&appid=${apiKey}`
    fetch(currentWeatherApi)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let nameValue = data.name;
        let tempValue = data.main.temp;
        let celsiusTemp = (tempValue - 273.15);
        let humidityValue = data.main.humidity;
        let windSpeedValue = data.wind.speed;

        cityName.innerHTML = nameValue;
        console.log(nameValue);
        // add innerHTML for icon
        currentTemperature.innerHTML = "Temp:" + " " + Math.floor(celsiusTemp) + "°C";
        console.log(tempValue);
        currentHumidity.innerHTML = "Humidity:" + " " + humidityValue;
        console.log(humidityValue);
        currentWindSpeed.innerHTML = "Wind:" + " " + windSpeedValue;
    })
}

submitButton.addEventListener("click", getCurrentWeather)

