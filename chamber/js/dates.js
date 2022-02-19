// current date in header

const now = new Date();
const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

document.getElementById("date").innerHTML = fullDate;
document.getElementById("date2").innerHTML = fullDate;


// year and last modified displayed in footer

let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

document.querySelector("#last-modified").textContent = document.lastModified;
