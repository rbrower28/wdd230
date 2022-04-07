// Fetching and placing JSON data

const requestURL = 'https://rbrower28.github.io/wdd230/temple-site/data/temples.json';
const cards = document.querySelector('.temple-grid');


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject['temples'];
    temples.forEach(displayTemples);
});


function displayTemples(temple) {

  // Create overall div
  let card = document.createElement('div');
  card.classList.add("card");

  // part 1: image

  let imgDiv = document.createElement('div');

  let img = document.createElement('img');

  img.setAttribute('src', temple.imgUrl);
  img.setAttribute('alt', `The temple in ${temple.location}`);
  img.setAttribute('loading', 'lazy');

  let heartBtn = document.createElement('button');
  heartBtn.classList.add("heartBtn");
  
  let heart = document.createElement('img');
  heart.setAttribute('src', "https://rbrower28.github.io/wdd230/temple-site/images/icons/heart.webp");
  heart.classList.add("heart");
  heart.id = temple.location[0];

  heartBtn.appendChild(heart);

  heartBtn.addEventListener('click', like);
  like_setup(heartBtn);

  imgDiv.appendChild(img);
  imgDiv.appendChild(heartBtn);

  // part 2: facts

  let factsDiv = document.createElement('div');

  let title = document.createElement('h3');
  title.textContent = temple.location;

  let numDedicated = document.createElement('h4');
  numDedicated.textContent = "The " + temple.numDedicated + " temple.";

  let dedication = document.createElement('p');
  dedication.textContent = "Dedicated on " + temple.dedication + " by " + temple.dedicatedBy + ".";

  let didYouKnow = document.createElement('h4');
  didYouKnow.textContent = "Did you know?";

  let fact = document.createElement('p');
  fact.textContent = temple.didYouKnow;

  factsDiv.appendChild(title);
  factsDiv.appendChild(numDedicated);
  factsDiv.appendChild(dedication);
  factsDiv.appendChild(didYouKnow);
  factsDiv.appendChild(fact);

  // part 3: contact

  let contactDiv = document.createElement('div');
  contactDiv.classList.add("contactDiv");

  let h4phone = document.createElement('h4');
  h4phone.textContent = "Phone:";
  let phone = document.createElement('p');
  phone.textContent = temple.phone;

  let h4address = document.createElement('h4');
  h4address.textContent = "Address:";
  let address = document.createElement('p');
  address.textContent = temple.address;

  let h4schedule = document.createElement('h4');
  h4schedule.textContent = "Schedule:";
  let schedule = document.createElement('p');
  schedule.textContent = temple.schedule;

  contactDiv.appendChild(h4phone);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(h4address);
  contactDiv.appendChild(address);
  contactDiv.appendChild(h4schedule);
  contactDiv.appendChild(schedule);

  // part 4: info

  let infoDiv = document.createElement('div');

  let h4services = document.createElement('h4');
  h4services.textContent = "Services:";
  let services = document.createElement('p');
  services.textContent = temple.services;

  let h4ordinances = document.createElement('h4');
  h4ordinances.textContent = "Ordinances:";
  let ordinances = document.createElement('p');
  ordinances.textContent = temple.ordinances;

  let h4closures = document.createElement('h4');
  h4closures.textContent = "Closures:";
  let closures = document.createElement('p');
  closures.textContent = temple.closures;

  infoDiv.appendChild(h4services);
  infoDiv.appendChild(services);
  infoDiv.appendChild(h4ordinances);
  infoDiv.appendChild(ordinances);
  infoDiv.appendChild(h4closures);
  infoDiv.appendChild(closures);


  // Add/append the section(card) with the h2 element
  card.appendChild(imgDiv);
  card.appendChild(factsDiv);
  card.appendChild(contactDiv);
  card.appendChild(infoDiv);

  // Add/append the existing HTML div with the cards class with the section(card)
  cards.appendChild(card);
}


function like(e) {
  let element = e.target;

  let likes = localStorage.getItem('likes');

  if (element.getAttribute('src') === "https://rbrower28.github.io/wdd230/temple-site/images/icons/heart.webp") {

    element.setAttribute("src", "https://rbrower28.github.io/wdd230/temple-site/images/icons/heart-full.webp");

    likes += element.id;

    localStorage.setItem('likes', likes);

  } else {

    element.setAttribute("src", "https://rbrower28.github.io/wdd230/temple-site/images/icons/heart.webp")

    let new_likes = likes.replace(element.id, "");

    localStorage.setItem('likes', new_likes);

  };
}


function like_setup(e) {
  
  let element = e.childNodes[0];

  if (localStorage.getItem('likes') == null) {
    localStorage.setItem('likes', '')
  }

  let likes = localStorage.getItem('likes');

  if (likes.includes(element.id)) {
    element.setAttribute("src", "https://rbrower28.github.io/wdd230/temple-site/images/icons/heart-full.webp");
  }
}