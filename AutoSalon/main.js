/*================ SCROLL REVEAL ================ */
document.addEventListener("DOMContentLoaded", function () {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
  });
  sr.reveal(".home-title, .home-img");
  sr.reveal(".header", { delay: 400 });
  sr.reveal(".home-title", { delay: 500 });
  sr.reveal(".home-car-title", { delay: 600 });
  sr.reveal(".electric-bx", { delay: 650 });
  sr.reveal(".home-img", { delay: 800 });
  sr.reveal(".home-description", {
    delay: 900,
    interval: 100,
    origin: "bottom",
  });
  sr.reveal(".home-button", { delay: 1000, origin: "bottom" });
  sr.reveal(".about-img", { origin: "left" });
  sr.reveal(".about-card", { origin: "left" });
  sr.reveal(".about-description", { origin: "right" });
  sr.reveal(".popular-item-1 ", { delay: 500 });
  sr.reveal(".popular-item-2 ", { delay: 650 });
  sr.reveal(".popular-item-3 ", { delay: 750 });
  sr.reveal(".popular-item-4 ", { delay: 850 });
  sr.reveal(".popular-item-5 ", { delay: 950 });
  sr.reveal(".popular-item-6 ", { delay: 1050 });
  sr.reveal(".featured-card", { interval: 300 });
  sr.reveal(".logo-1", { delay: 500 });
  sr.reveal(".logo-2", { delay: 600 });
  sr.reveal(".logo-3", { delay: 700 });
  sr.reveal(".logo-4", { delay: 800 });
  sr.reveal(".footer-title-1", { delay: 500 });
  sr.reveal(".footer-title-2", { delay: 650 });
  sr.reveal(".footer-title-3", { delay: 750 });
  sr.reveal(".footer-title-4", { delay: 850 });
  sr.reveal(".footer-end", { delay: 950 });
});
// ==================================================================

/*============================= MIX FILTER FEATURED SECTION ==================================== */
document.addEventListener("DOMContentLoaded", function () {
  let mixerFeatured = mixitup(".featured-content", {
    selectors: {
      target: ".featured-card ",
    },
    animation: {
      duration: 300,
    },
  });
});
/*================= LINK ACTIVE FEATURED SECTION ================== */
const linkFeatured = document.querySelectorAll(".featured-item");

function activeFeatured() {
  linkFeatured.forEach((L) => L.classList.remove("active-featured"));
  this.classList.add("active-featured");
}
linkFeatured.forEach((L) => L.addEventListener("click", activeFeatured));
// ===============================================================================================

/*================================= RESPONSIVE MENU BAR ==================================== */
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const closeToggle = document.querySelector(".close-toggle");
  const navLinks = document.querySelector(".nav-links");

  let isNavLinksVisible = false;

  // Function to open the navigation menu
  function openNavLinks() {
    navLinks.style.right = "-50%";
    closeToggle.style.display = "block"; // Show close toggle
    menuBtn.style.display = "none"; // Hide menu button
    isNavLinksVisible = true;
  }

  // Function to close the navigation menu
  function closeNavLinks() {
    navLinks.style.right = "-100%";
    closeToggle.style.display = "none"; // Hide close toggle
    menuBtn.style.display = "block"; // Show menu button
    isNavLinksVisible = false;
  }

  menuBtn.addEventListener("click", function () {
    console.log("Menu button clicked"); // Debugging statement
    if (!isNavLinksVisible) {
      openNavLinks();
    } else {
      closeNavLinks();
    }
  });

  closeToggle.addEventListener("click", function () {
    console.log("Close toggle clicked"); // Debugging statement
    closeNavLinks();
  });
});
