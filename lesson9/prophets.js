// Fetching and placing JSON data on the Prophets html page

const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let pDate = document.createElement('p');
  let pPlace = document.createElement('p');
  let portrait = document.createElement('img');

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = `${prophet.name} ${prophet.lastname}`;

  //change the textContent property of the p elements
  pDate.textContent = `Date of Birth: ${prophet.birthdate}`;
  pPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

  // if the order is 1st through third, places custom 'st' 'nd' rd' - Else 'th'
  let count = 'th'
  if (prophet.order == '1') {
    count = 'st'
  } else if (prophet.order == '2') {
    count = 'nd'
  } else if (prophet.order == '3') {
    count = 'rd'
  }

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  portrait.setAttribute('src', prophet.imageurl);
  portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${count} Latter-day President`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(pDate);
  card.appendChild(pPlace);
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}