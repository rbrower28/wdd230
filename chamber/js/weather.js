// weather

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5810915&appid=41d725cc098e150ee6d99851e1d2661f&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    // console.log(jsObject);

    // Establish weather variables
    
    const temp = Math.round(jsObject.list[0].main.temp)
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
    const desc = jsObject.list[0].weather[0].description;
    const wind_speed = Math.round(jsObject.list[0].wind.speed*10)/10;
    
    // set weather elements

    document.querySelector("#temp").textContent = temp;
    document.querySelector("#conditions").textContent = desc;
    document.querySelector('#w_img').setAttribute('src', iconsrc);
    document.querySelector('#w_img').setAttribute('alt', desc);

    const wind_chill = "N/A";
    document.querySelector("#w_speed").textContent = wind_speed;
    document.querySelector("#w_chill").textContent = wind_chill;

    // Calculate and store wind chill
    // The formula to calculate the wind chill factor is:
    // f = 35.74 + 0.6215(temp) - 35.75(windspeed)^(0.16) + 0.4275(temp)(windspeed)^(0.16)

    if (temp <= 50 && wind_speed >= 3) {
        const chill = 35.74 + 0.6215*temp - 35.75*Math.pow(wind_speed, 0.16) + 0.4275*temp*Math.pow(wind_speed, 0.16);
        const windchill = `${Math.round(chill*10)/10} °F`
        document.querySelector("#w_chill").textContent = windchill;
    } else {
        document.querySelector("#w_chill").textContent = "N/A";
    };

});