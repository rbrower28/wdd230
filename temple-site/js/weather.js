// weather

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5786882&appid=41d725cc098e150ee6d99851e1d2661f&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    // Establish weather variables
    
    const temp = Math.round(jsObject.list[0].main.temp)
    const desc = jsObject.list[0].weather[0].description;
    
    // set weather elements

    document.querySelector("#c-temp").textContent = temp;
    document.querySelector("#c-condition").textContent = desc;
    document.querySelector("#c-location").textContent = "Seattle.";
  });


const apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=47.610377&lon=-122.2006786&appid=41d725cc098e150ee6d99851e1d2661f&units=imperial";

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {

    // write date adding function

    Date.prototype.addDays = function (days) {
      let date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    // set a new date
    
    const date = new Date()

    // set day 1

    const firstDayName = date.toLocaleString(
      'default', {weekday: 'long'}
    );
    
    document.querySelector("#today").textContent = firstDayName;
    document.querySelector("#today-temp").textContent = Math.round(jsObject.daily[0].temp.day);

    // set day 2

    const date2 = date.addDays(1);
    const secondDayName = date2.toLocaleString(
      'default', {weekday: 'long'}
    );
    
    document.querySelector("#tomorrow").textContent = secondDayName;
    document.querySelector("#tomorrow-temp").textContent = Math.round(jsObject.daily[1].temp.day);

    // set day 3

    const date3 = date.addDays(2);
    const thirdDayName = date3.toLocaleString(
      'default', {weekday: 'long'}
    );
    
    document.querySelector("#next-day").textContent = thirdDayName;
    document.querySelector("#next-day-temp").textContent = Math.round(jsObject.daily[2].temp.day);

  });