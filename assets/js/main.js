/**
 * Template Name: MyPortfolio - v4.9.1
 * Template URL: https://bootstrapmade.com/myportfolio-bootstrap-portfolio-website-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */






(function() {
  "use strict";

  // Helper functions
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      all ? selectEl.forEach(e => e.addEventListener(type, listener)) : selectEl.addEventListener(type, listener);
    }
  };

  
  function showText() {
  var text = document.getElementById("text");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";}
  
}

  
  
  
  
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  // Burger menu
  const burgerMenu = select(".burger");
  on("click", ".burger", (e) => {
    burgerMenu.classList.toggle("active");
  });

  // Portfolio isotope and filter
  window.addEventListener("load", () => {
    let portfolioContainer = select("#portfolio-grid");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".item",
      });

      let portfolioFilters = select("#filters a", true);

      on("click", "#filters a", function(e) {
        e.preventDefault();
        portfolioFilters.forEach((el) => el.classList.remove("active"));
        this.classList.add("active");

        portfolioIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
        portfolioIsotope.on("arrangeComplete", () => AOS.refresh());
      }, true);
    }
  });

  // Testimonials slider
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  // Animation on scroll
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });

  // Expand and collapse function
  function toggle() {
    var div = document.querySelector(".expand-collapse");
    div.style.height = div.style.height === "100px" ? "auto" : "100px";
  }

  
  var dotImage2 = document.querySelector('#dot-image-2');
  
  
  // Dropdown menu
  const dotImage = document.getElementById("dot-image");
  const dropdownMenu = document.getElementById("dropdown-menu");

  dotImage.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  });

    // Dropdown menu2
  const dotImage = document.getElementById("dot-image");
  const dropdownMenu2 = document.getElementById("dropdown-menu2");

  dotImage.addEventListener("click", () => {
    dropdownMenu2.style.display = dropdownMenu2.style.display === "none" ? "block" : "none";
  });
})();
