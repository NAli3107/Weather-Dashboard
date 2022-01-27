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


/*Function to fetch data from Current Weather API*/
function getCurrentWeather(event){
    event.preventDefault()
    // console.log(inputBox.value)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&appid=${apiKey}`
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let cityName = data['name'];

        name.innerHTML = cityName;
    })
}

submitButton.addEventListener("click", getCurrentWeather)

