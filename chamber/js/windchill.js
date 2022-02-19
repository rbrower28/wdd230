// weather

const temp = 32;
document.querySelector("#temp").textContent = temp;

const conditions = "cloudy";
document.querySelector("#conditions").textContent = conditions;

const wind_speed = 15;
const wind_chill = "N/A";
document.querySelector("#w_speed").textContent = wind_speed;
document.querySelector("#w_chill").textContent = wind_chill;


// The formula to calculate the wind chill factor is:
// f = 35.74 + 0.6215(temp) - 35.75(windspeed)^(0.16) + 0.4275(temp)(windspeed)^(0.16)

const temperature = parseFloat(document.getElementById("temp").textContent);
const windspeed = parseFloat(document.getElementById("w_speed").textContent);

if (temperature <= 50 && windspeed >= 3) {
    const chill = 35.74 + 0.6215*temperature - 35.75*Math.pow(windspeed, 0.16) + 0.4275*temperature*Math.pow(windspeed, 0.16);
    const windchill = `${Math.round(chill*10)/10} °F`
    document.querySelector("#w_chill").textContent = windchill;
} else {
    document.querySelector("#w_chill").textContent = "N/A";
};