
const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5861897&appid=41d725cc098e150ee6d99851e1d2661f&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temp = jsObject.list[0].main.temp
    document.querySelector('#current-temp').textContent = temp;
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    const desc = jsObject.list[0].weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });