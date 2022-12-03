// Hamburger menu toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
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

// PAgination

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

// Backtop}
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{ 
    if (window.pageYOffset > 300) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})