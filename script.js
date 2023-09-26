const apiKey = "a9e3ee0b957fa727bb72e8567eb21c4a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/hr";








}

checkWeather();