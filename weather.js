export const weather = document.querySelector(".weather");

export const COORDS_LS = "coords",
  API_KEY = "b0cd65c70cf014eaf87c668425ed739b";

export function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const country = json.sys.country
      const place = json.name;
      const temp = json.main.temp;
      const temp_max = json.main.temp_max;
      const temp_min = json.main.temp_min;
      weather.textContent = `${country}, ${place}, 현재온도 : ${temp}도, 최고온도 : ${temp_max}도, 최저온도 :  ${temp_min}도`;
    })
}

export function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

export function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

export function handleGeoError() {
  console.log("can't access geo location");
}

export function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

export function loadCoords() {
  const getCoords = localStorage.getItem(COORDS_LS);
  if (getCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(getCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
    
  }
}

export function initCoords() {
  loadCoords();
}

initCoords();