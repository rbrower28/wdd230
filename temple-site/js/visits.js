// find the date and store

const now = new Date()

const today = now.getDate()
const fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

if (localStorage.getItem('last-visit') === null) {
    localStorage.setItem('last-visit', fullDate);
    last = today;
} else {
    last = localStorage.getItem('last-visit');
}

document.querySelector('#last-visited').textContent = last;

localStorage.setItem('last-visit', today);
