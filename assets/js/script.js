/*Global Variable Memory */
const submitButton = document.getElementById("search-button")
const apiKey = "e005f427432a127e4dbd6f5d523c847e"


function getCurrentWeather(cityName){
    event.preventDefault()
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}

submitButton.addEventListener("click", getCurrentWeather)