
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=47.610377&lon=-122.2006786&appid=41d725cc098e150ee6d99851e1d2661f&units=imperial&lang=en";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    // Establish weather variables

    const temp = Math.round(jsObject.current.temp);
    const desc = jsObject.current.weather[0].description;
    const humidity = jsObject.current.humidity;
    
    // set weather elements

    document.querySelector("#c-temp").textContent = temp;
    document.querySelector("#c-condition").textContent = desc;
    document.querySelector("#c-location").textContent = "Seattle.";
    document.querySelector("#c-humidity").textContent = humidity;

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


    // conditional logic for weather warnings

    const warning = jsObject.alerts.description;

    if (jsObject.alerts) {
      document.querySelector("#warning").textContent = warning;
      document.querySelector(".notif").classList.toggle("hidden");
    };

    const closeButton = document.querySelector("#close-notif");
    closeButton.addEventListener('click', function(){
      document.querySelector(".notif").classList.toggle("hidden");
    })

  });