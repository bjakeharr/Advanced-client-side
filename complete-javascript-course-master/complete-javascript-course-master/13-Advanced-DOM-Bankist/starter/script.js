'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//------selecting , creating, and deleting elements
//selecting an element

//selecting via document
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//selecting via class name
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//selecting by Id
document.getElementById('section--1');

//selecting by tag or class name (old mehtods)
const allButtons = document.getElementsByTagName('button');

document.getElementsByClassName('btn');

//creating and inserting elements
//.insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent =
  'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);

//delete elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//========styles attributes and classes

//styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//--attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);

//non standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const slcoords = section1.getBoundingClientRect();
  console.log(slcoords);

  console.log(e.target.getBoundingClientRect());

  //scrolling
  // window
  //   .scrollTo
  //   // slcoords.left + window.pageXOffset,
  //   // slcoords.top + window.pageYOffset
  //   ();

  // window.scrollTo({
  //   left: slcoords.left + window.pageXOffset,
  //   top: slcoords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});
