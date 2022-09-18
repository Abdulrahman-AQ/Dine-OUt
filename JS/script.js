// Header Start
let header = document.getElementById("header");
let navIcon = document.getElementById("navIcon");
let iconBars = document.querySelectorAll(".header .container nav .navIcon div");
let links = document.getElementById("links");
let navLinks = document.querySelectorAll(".header .container nav .links ul li");
let linksIcon = document.querySelector(".header .container nav .links .icon");

document.addEventListener("scroll", function () {
  if (window.scrollY >= "750") {
    header.style.backgroundColor = "#000033";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

navIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  links.classList.toggle("active");
  header.classList.toggle("active");
});

navLinks.forEach(function (e) {
  e.onclick = function () {
    navIcon.click();
  };
});

// Header End

// Menu Start
let tabs = document.querySelectorAll(".tabs .tab");
let menuSections = document.querySelectorAll(
  ".menu .container .menuSections .menuSec"
);
let lunchSection = document.getElementById("lunch");
let dinnerSection = document.getElementById("dinner");
let drinksSection = document.getElementById("drinks");
let dessertsSection = document.getElementById("desserts");

tabs.forEach(function (e) {
  e.addEventListener("click", function () {
    tabs.forEach(function (e) {
      e.classList.remove("active");
    });

    this.classList.add("active");

    if (this.getAttribute("menu-type") === "lunch") {
      lunchSection.style.display = "grid";
    } else {
      lunchSection.style.display = "none";
    }

    if (this.getAttribute("menu-type") === "dinner") {
      dinnerSection.style.display = "grid";
    } else {
      dinnerSection.style.display = "none";
    }

    if (this.getAttribute("menu-type") === "drinks") {
      drinksSection.style.display = "grid";
    } else {
      drinksSection.style.display = "none";
    }

    if (this.getAttribute("menu-type") === "desserts") {
      dessertsSection.style.display = "grid";
    } else {
      dessertsSection.style.display = "none";
    }
  });
});

// Menu End
