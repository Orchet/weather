
import { weather_data } from './data.js';

var codigoCiudad ;

let loadCiudades = () => {
  let varCiudades = new Map();
  let elementCargaCiudades = document.getElementById ("dropdownMenuButton");
  for (let ciudad in weather_data){
    varCiudades.set(weather_data[ciudad].city_code,weather_data[ciudad].city);
  }
  for (const [key, value] of varCiudades) {
      //console.log(`${key} = ${value}`);
      elementCargaCiudades.innerHTML += `<option class="dropdown-item" value="${key}">${value}</option>`
    }     
}


let loadDayForecastData = (codigoCiudad) => {
    let dataCiudad = weather_data.filter(element => element.city_code === codigoCiudad);
    let {city, date, maxtemperature, mintemperature, cloudiness, wind, rainfall, forecast_today} = dataCiudad[0];
  
    let elementCity = document.getElementById ("city");
    elementCity.innerHTML = city;

    let elementDate = document.getElementById ("date");
    elementDate.innerHTML = date;

    let elementMaxTemp = document.getElementById ("maxtemperature");
    elementMaxTemp.innerHTML = maxtemperature;

    let elementMinTemp = document.getElementById ("mintemperature");
    elementMinTemp.innerHTML = mintemperature;

    let elementCloudiness = document.getElementById ("cloudiness");
    elementCloudiness.innerHTML = cloudiness;

    let elementWind = document.getElementById ("wind");
    elementWind.innerHTML = wind;

    let elementRainfall = document.getElementById ("rainfall");
    elementRainfall.innerHTML = rainfall;


    //====== LATE ======
    let {text: late_text, temperature: late_temperature, forecast: late_forecast, icon: late_icon} = forecast_today[0];

    let elementLate_icon = document.getElementById ("late_icon");
    elementLate_icon.innerHTML = late_icon;

    let elementLate_temperature = document.getElementById ("late_temperature");
    elementLate_temperature.innerHTML = late_temperature;

    let elementLate_forecast = document.getElementById ("late_forecast");
    elementLate_forecast.innerHTML = late_forecast;

    let elementLate_text = document.getElementById ("late_text");
    elementLate_text.innerHTML = late_text;


    //====== NIGHT ======
    let {text: night_text, temperature: night_temperature, forecast: night_forecast, icon: night_icon} = forecast_today[1];

    let elementNight_icon = document.getElementById ("night_icon");
    elementNight_icon.innerHTML = night_icon;
  
    let elementNight_temperature = document.getElementById ("night_temperature");
    elementNight_temperature.innerHTML = night_temperature;
  
    let elementNight_forecast = document.getElementById ("night_forecast");
    elementNight_forecast.innerHTML = night_forecast;
  
    let elementNight_text = document.getElementById ("night_text");
    elementNight_text.innerHTML = night_text;
  
}

let loadWeekForecastData = (codigoCiudad) => {	

  let dataCiudad = weather_data.filter(element => element.city_code === codigoCiudad);
  let {forecast_week} = dataCiudad[0];
  
  for (let datos in forecast_week) {
    let {text, date, temperature , icon} = forecast_week[datos];
    let {min, max} = temperature;

    let elementForeCastWeek = document.getElementsByClassName ("list-group");
    elementForeCastWeek[0].innerHTML += `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
    <div class="d-flex flex-column">
      <h6 class="mb-1 text-dark font-weight-bold text-sm">${text}</h6>
      <span class="text-xs">${date}</span>
    </div>
    <div class="d-flex align-items-center ">
      <span class="font-weight-bold text-dark mx-2">${max}</span> |  <span class="text-dark mx-2">${min}</span>
      <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${icon}</i></div>
    </div>
  </li>`  
  }  	
} 

 
document.addEventListener("DOMContentLoaded", () => {
   loadCiudades();
   loadDayForecastData("127947");
});

let btnCargar = document.getElementById('loadinfo');
btnCargar.addEventListener('click', () => {
     loadWeekForecastData(document.getElementById("dropdownMenuButton").value); })


let btnSeleccionar = document.getElementById('dropdownMenuButton');
btnSeleccionar.addEventListener('change', (event) => { 
  let clearCarga = document.getElementsByClassName ("list-group");
  clearCarga[0].innerHTML = '';
  codigoCiudad = event.target.value;
  loadDayForecastData(codigoCiudad);
}) ;

