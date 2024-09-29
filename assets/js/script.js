'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
    
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
  document.body.classList.toggle("active");
}
addEventOnElem(navToggler, "click", toggleNavbar);
const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 300) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeHeader);



/**
 * toggle active on add to fav
 */

const addToFavBtns = document.querySelectorAll("[data-add-to-fav]");

const toggleActive = function () {
  this.classList.toggle("active");
}

addEventOnElem(addToFavBtns, "click", toggleActive);



/**
 * scroll revreal effect
 */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 1.5) {
      sections[i].classList.add("active");
    } else {
      sections[i].classList.remove("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

// Get the sell form
const sellForm = document.getElementById('sellCryptoForm');

// Add event listener to handle form submission
sellForm.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting the traditional way

  // Get form data
  const cryptoType = document.getElementById('cryptoType').value;
  const amount = document.getElementById('amount').value;
  const price = document.getElementById('price').value;

  // Perform simple validation (ensuring values are not empty)
  if (cryptoType && amount > 0 && price > 0) {
    alert(`You are selling ${amount} ${cryptoType} for $${price} per unit.`);
    // Here you can add further functionality such as saving the data to a backend or updating a database
  } else {
    alert('Please fill in all the fields correctly.');
  }
});

// Wallet modal functionality (existing code)
var modal = document.getElementById("walletModal");
var btn = document.getElementById("walletBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
