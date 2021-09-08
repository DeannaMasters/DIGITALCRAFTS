const apiKey = "37591fafd118ef67ee68833098cfcd2a"
// const dataURL = (`http://api.openweathermap.org/data/2.5/weather?q=${locInput},us&appid=c622d85fb1a656b0a3ab04b6a4f7fe706&units=imperial`);
const mainContainer = document.querySelector(".main-container");
const searchButton = document.querySelector(".button");

async function findWeather(){
    const weatherContainer = document.querySelector(".weather-container");
    weatherContainer.innerHTML = ""
    const input = document.querySelector(".name-of-city").value;
    const currentWeather = await fetch `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=imperial`;
    // console.table(`${dataURL}`+ input + "&units=imperial&appid=" + apiKey)
    const convertedWeather = await currentWeather.json();
    const currentTemp = convertedWeather.main.temp
    console.log(currentTemp)
    const weatherText = document.createElement("h1")
    weatherText.className = "results"
    weatherText.innerHTML = currentTemp.toFixed(0) + "\u00B0F"
    mainContainer.append(weatherContainer)
    weatherContainer.append(weatherText) 
  }

searchButton.addEventListener("click", ()=>{findWeather();
})
