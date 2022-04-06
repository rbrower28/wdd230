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
  let pNumDedicated = document.createElement('p');
  let pDedication = document.createElement('p');
  let dedDate = document.createElement('strong');
  let pDedicatedBy = document.createElement('p');
  let dedName = document.createElement('strong');
  let didYouKnow = document.createElement('h4');
  let fact = document.createElement('p');

  // set strong properties first

  dedDate = temple.dedication;
  dedName = temple.dedicatedBy;

  // Set properties to the other elements
  h2.textContent = temple.location;
  pDedication.textContent = "Dedicated on" + dedDate;
  pDedicatedBy.textContent = "by" + dedName;
  pNumDedicated.textContent = "The " + temple.numDedicated + " temple."
  didYouKnow.textContent = "Did you know?"
  fact.textContent = temple.didYouKnow;

  // Building the image attributes
  logo.setAttribute('src', business.logoUrl);
  logo.setAttribute('alt', `The logo of ${business.name}`);
  logo.setAttribute('loading', 'lazy');

  // setting attributes for a element
  pWebsite.textContent = business.website;
  pWebsite.setAttribute('href', business.website)

  // Add/append the section(card) with the h2 element
  card.appendChild(h3);
  card.appendChild(img);
  card.appendChild(pNumDedicated);
  card.appendChild(pDedication);
  card.appendChild(pDedicatedBy);
  card.appendChild(didYouKnow);
  card.appendChild(fact);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}