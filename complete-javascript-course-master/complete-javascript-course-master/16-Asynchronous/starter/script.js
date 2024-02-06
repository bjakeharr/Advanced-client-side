'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//old way of AJAX calls
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//   </article>
//         `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('germany');
//Welcome to callback hell================================
const renderCountry = function (data, className) {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
  </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryandNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //render country one
//     renderCountry(data);

//     //get neighbor country
//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     //AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryandNeighbor('usa');
///===========promises

// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// );
// request.send();

//new way
const request = fetch(
  `https://countries-api-836d.onrender.com/countries/name/portugal`
);
console.log(request);

//a promise is an object that holds a spot for a value yet to be filled

const getCountryData = function (country) {
  fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      //neighbor
      return fetch(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`
      );
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('usa');
