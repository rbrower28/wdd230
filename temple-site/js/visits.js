// find the date and store

const now = new Date()

const fullDate = new Intl.DateTimeFormat("en-US").format(now);

if (localStorage.getItem('last-visit') === null) {
    localStorage.setItem('last-visit', fullDate);
    last = today;
} else {
    last = localStorage.getItem('last-visit');
}

document.querySelector('#last-visited').textContent = last;

localStorage.setItem('last-visit', fullDate);

document.querySelector("#last-modified").textContent = document.lastModified;