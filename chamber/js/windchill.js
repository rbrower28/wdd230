// The formula to calculate the wind chill factor is:
// f = 35.74 + 0.6215(temp) - 35.75(windspeed)^(0.16) + 0.4275(temp)(windspeed)^(0.16)

const temperature = parseFloat(document.getElementById("temp").textContent);
const windspeed = parseFloat(document.getElementById("w_speed").textContent);

if (temperature <= 50 && windspeed >= 3) {
    const windchill = 35.74 + 0.6215*temperature - 35.75*windspeed^0.16 + 0.4275*temperature*windspeed^0.16;
    document.querySelector("#w_chill").textContent = windchill;
} else {
    document.querySelector("#w_chill").textContent = "N/A";
};