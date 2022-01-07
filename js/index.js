
let currentYear = new Date().getFullYear();
console.log(currentYear);
document.querySelector("#year").textContent = currentYear;

document.querySelector("#last-modified").textContent = document.lastModified;