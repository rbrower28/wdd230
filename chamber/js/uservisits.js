// find the date and store

const today = now.getDate()
let difference = Number;

if (localStorage.getItem('last-visit') === null) {
    localStorage.setItem('last-visit', now.getDate());
    difference = 0;
} else {
    difference = today - localStorage.getItem('last-visit');
}

document.querySelector('#visit-difference').textContent = difference;

localStorage.setItem('last-visit', today);
