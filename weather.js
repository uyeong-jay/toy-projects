const weather = document.querySelector(".weather");

const COORDS_LS = "coords",
  API_KEY = "b0cd65c70cf014eaf87c668425ed739b";

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(function (response) {
    return
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

  }
}

function initCoords() {
  loadCoords();
}