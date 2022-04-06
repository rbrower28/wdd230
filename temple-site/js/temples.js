// Fetching and placing JSON data

const requestURL = 'https://rbrower28.github.io/wdd230/temple-site/data/temples.json';
const cards = document.querySelector('.temple-grid');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});


function displayTemples(temple) {

  // Create elements to add to the document
  let card = document.createElement('div');
  let img = document.createElement('img');
  let h3 = document.createElement('h3');
  let pNumDedicated = document.createElement('h4');
  let pDedication = document.createElement('p');
  let didYouKnow = document.createElement('h4');
  let fact = document.createElement('p');

  // Set properties to the other elements
  h3.textContent = temple.location;
  pDedication.textContent = "Dedicated on " + temple.dedication + " by " + temple.dedicatedBy + ".";
  pNumDedicated.textContent = "The " + temple.numDedicated + " temple."
  didYouKnow.textContent = "Did you know?"
  fact.textContent = temple.didYouKnow;

  // Building the image attributes
  img.setAttribute('src', temple.imgUrl);
  img.setAttribute('alt', `The temple in ${temple.location}`);
  img.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h3);
  card.appendChild(img);
  card.appendChild(pNumDedicated);
  card.appendChild(pDedication);
  card.appendChild(didYouKnow);
  card.appendChild(fact);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}