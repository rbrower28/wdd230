// events dates

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const date1 = `${now.getDate()} ${months[now.getMonth()]}`;
document.querySelector("#eventdate1").textContent = date1

now.setDate(now.getDate() + 2);
const date2 = `${now.getDate()} ${months[now.getMonth()]}`;
document.querySelector("#eventdate2").textContent = date2

now.setDate(now.getDate() + 5);
const date3 = `${now.getDate()} ${months[now.getMonth()]}`;
document.querySelector("#eventdate3").textContent = date3

now.setDate(now.getDate() + 4);
const date4 = `${now.getDate()} ${months[now.getMonth()]}`;
document.querySelector("#eventdate4").textContent = date4

const date5 = `${now.getDate()} ${months[now.getMonth()]}`;
document.querySelector("#eventdate5").textContent = date5

now.setDate(now.getDate() + 3);
const date6 = `${now.getDate()} ${months[now.getMonth()]}`;
document.querySelector("#eventdate6").textContent = date6
