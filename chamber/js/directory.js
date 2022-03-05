// Fetching and placing JSON data

const requestURL = 'https://rbrower28.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
});


function displayBusinesses(business) {

  // Create elements to add to the document
  let card = document.createElement('section');
  let logo = document.createElement('img');
  let h2 = document.createElement('h2');
  let pAddress = document.createElement('p');
  let pPhone = document.createElement('p');
  let pWebsite = document.createElement('a');

  // Set properties to the h2 and p elements
  h2.textContent = business.name;
  pAddress.textContent = business.address;
  pPhone.textContent = business.phone;

  // Building the image attributes
  logo.setAttribute('src', business.logoUrl);
  logo.setAttribute('alt', `The logo of ${business.name}`);
  logo.setAttribute('loading', 'lazy');

  // setting attributes for a element
  pWebsite.textContent = business.website;
  pWebsite.setAttribute('href', business.website)

  // Add/append the section(card) with the h2 element
  card.appendChild(logo);
  card.appendChild(h2);
  card.appendChild(pAddress);
  card.appendChild(pPhone);
  card.appendChild(pWebsite);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}