// current date in header

const now = new Date()
const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

document.getElementById("date").innerHTML = fullDate;
document.getElementById("date2").innerHTML = fullDate;

// hamburger menu

function openMenu() {
    document.getElementById("lower").classList.remove("hidden");
    document.getElementById("lower-nav").classList.remove("hidden");
    document.getElementById("date2").classList.remove("hidden");
    document.getElementById("stack-bottom").classList.remove("hidden");
    document.getElementById("stack-top").classList.add("hidden");
};

function closeMenu() {
    document.getElementById("lower").classList.add("hidden");
    document.getElementById("lower-nav").classList.add("hidden");
    document.getElementById("date2").classList.add("hidden");
    document.getElementById("stack-bottom").classList.add("hidden");
    document.getElementById("stack-top").classList.remove("hidden");
};

const x = document.getElementById("stack-top");
x.onclick = openMenu;

const y = document.getElementById("stack-bottom");
y.onclick = closeMenu;

// year and last modified displayed in footer

let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

document.querySelector("#last-modified").textContent = document.lastModified;