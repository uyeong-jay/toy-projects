const weather = document.querySelector(".weather");

const COORDS_LS = "coords",
  API_KEY = "b0cd65c70cf014eaf87c668425ed739b";

function getWeather(lat, lon) {
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
      weather.innerHTML = `국가 : ${country}<br>사는 곳 : ${place}<br>현재온도 : ${temp}°<br>최고온도 : ${temp_max}°<br> 최저온도 : ${temp_min}°`;
    })
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  }
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log("can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const getCoords = localStorage.getItem(COORDS_LS);
  if (getCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(getCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function initCoords() {
  loadCoords();
}

initCoords();