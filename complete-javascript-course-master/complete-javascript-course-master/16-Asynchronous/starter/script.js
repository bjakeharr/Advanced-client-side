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
const getJSON = function (url, errorMsg = 'SOmething went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    `Something went wrong`
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];
      console.log(neighbor);

      if (!neighbor) throw new Error('No neighbor found');

      //neighbor
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`,
        `Something went wrong`
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`); //catches can be used manually at the end of a chain to compile errors;
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//coding "challenge" 1
// const whereAmI = function (lat, lng) {
//   //grab data from the API
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error('PProblem with Geocode API');
//       //decode the data
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}.`);
//       //pass data from previous query into new request
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${data.country}`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with fetching country data`);
//       //decode data from new request
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       //pass data to render function
//       renderCountry(data[0]);
//     })
//     .catch(err => console.error(`${err.message}`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

///THe event loop in practice
// console.log(`test start`);
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve(`Resolved promise 1`).then(res => console.log(res));
// console.log('Test end');

//building a promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`lottery has started`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You win`);
//     } else {
//       reject(`You lose`);
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//promisifying settimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`Waited for two seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`waited again`));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  //grab data from the API
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error('PProblem with Geocode API');
      //decode the data
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}.`);
      //pass data from previous query into new request
      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with fetching country data`);
      //decode data from new request
      return res.json();
    })
    .then(data => {
      console.log(data);
      //pass data to render function
      renderCountry(data[0]);
    })
    .catch(err => console.error(`${err.message}`));
};

//coding challenge 2
// const imgContainer = document.querySelector('.images');

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImg = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     let image = document.createElement('img');
//     image.src = imgPath;
//     image.addEventListener('load', function () {
//       imgContainer.append(image);
//       resolve(image);

//       image.addEventListener('load', function () {
//         reject(new Error('image not found'));
//       });
//     });
//   });
// };

// let currentImg;
// createImg('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log(`immage loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImg('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`image 2 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImg('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`image 3 loaded`);
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(err));

//async/await

const whereAmIAsync = async function () {
  //await stops code until loaded
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    const res = await fetch(
      `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
    );
    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(err);
  }
};

btn.addEventListener('click', whereAmIAsync);
