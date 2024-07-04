document.addEventListener("DOMContentLoaded", function () {
  const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.querySelector(".nav-menu");

  let isDarkMode = false;
  let isMenuOpen = false;

  toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('bg-[#03002e]');
    document.body.classList.toggle('text-gray-100');
    document.body.classList.toggle('bg-gray-100');
    document.body.classList.toggle('text-black');

    isDarkMode = !isDarkMode;

    if (isDarkMode) {
      toggleDarkModeBtn.innerHTML = '<ion-icon name="sunny"></ion-icon>';
    } else {
      toggleDarkModeBtn.innerHTML = '<ion-icon name="moon"></ion-icon>';
    }
  });

  menuIcon.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      navMenu.classList.add('active');
      menuIcon.setAttribute("name", "close-outline");
    } else {
      navMenu.classList.remove('active');
      menuIcon.setAttribute("name", "menu");
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  let currentIndex = 0;

  const updateCards = () => {
    const isSmallScreen = window.innerWidth < 640; // Tailwind's sm breakpoint is 640px
    const cardsPerPage = isSmallScreen ? 1 : 2;

    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsPerPage) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  };

  document.getElementById('next').addEventListener('click', () => {
    const isSmallScreen = window.innerWidth < 375; 
    const cardsPerPage = isSmallScreen ? 1 : 2;

    currentIndex = (currentIndex + cardsPerPage) % cards.length;
    if (currentIndex + cardsPerPage > cards.length) {
      currentIndex = cards.length - cardsPerPage;
    }
    updateCards();
  });

  document.getElementById('prev').addEventListener('click', () => {
    const isSmallScreen = window.innerWidth < 375; 
    const cardsPerPage = isSmallScreen ? 1 : 2;

    currentIndex = (currentIndex - cardsPerPage + cards.length) % cards.length;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    updateCards();
  });

  window.addEventListener('resize', updateCards); 
  updateCards(); 
});

AOS.init({
  duration: 1000, 
  once: true 
});