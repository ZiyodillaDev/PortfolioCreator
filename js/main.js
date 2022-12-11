// Hamburger menu toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const bar3 = document.querySelector(".bar3")
const bars1 = document.querySelector(".bars1")
const bars2 = document.querySelector(".bars2")
const zIndex = document.querySelectorAll(".edu")

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
  bar3.classList.toggle('dn')
  bars1.classList.toggle('brs1')
  bars2.classList.toggle('brs2')
  toggleButton.classList.toggle('right')
  for(i of zIndex){
    i.classList.toggle('index')
  }
})

// Navbar Shrink
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").classList.add("navbar-shrink");
  } else {
    document.getElementById("navbar").classList.remove("navbar-shrink");
  }
}

//   Carousel

const prew = document.querySelector(".carouselPrew");
const next = document.querySelector(".carouselNext");
const firstCarousel = document.querySelector(".first-carousel");
const lastCarousel = document.querySelector(".last-carousel");

prew.addEventListener('click', () => {
  firstCarousel.style.display = "flex";
  lastCarousel.style.display = "none";
  lastCarousel.style.gap = "10px";
})

next.addEventListener('click', () => {
  firstCarousel.style.display = "none";
  lastCarousel.style.display = "flex";
  lastCarousel.style.gap = "10px";
})



// Pagination

const indicators = document.querySelectorAll(".indicators a");

for (i of indicators) {
  function add(event) {
    const show = document.querySelector("#show img");
    show.setAttribute("src", this.firstElementChild.getAttribute("src"));
    event.preventDefault();
  }
  i.addEventListener("click", add);
}

// Testimonials
const testPrew = document.querySelector(".test-prew");
const testNext = document.querySelector(".test-next");
const prewContent = document.querySelector(".testimonial__box__right__content");
const nextContent = document.querySelector(".testimonial__box__right__content2");

testPrew.addEventListener('click', () => {
  prewContent.style.display = "flex";
  nextContent.style.display = "none";
  prewContent.classList.add(".transition")
})

testNext.addEventListener('click', () => {
  prewContent.style.display = "none";
  nextContent.style.display = "flex";
  nextContent.classList.add(".transition")
})

// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// Backtop
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

