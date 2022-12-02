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
    if (document.documentElement.scrollTop > 100) {
      document.getElementById("navbar").classList.add("navbar-shrink");
    } else {
      document.getElementById("navbar").classList.remove("navbar-shrink");
    }
  }

//   