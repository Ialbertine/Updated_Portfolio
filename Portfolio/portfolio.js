document.addEventListener("DOMContentLoaded", function () {
  const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
  const menuIcon = document.getElementById("menu-icon");
  const navMenu = document.querySelector(".nav-menu");

  let isDarkMode = false;
  let isMenuOpen = false;

  toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('bg-[#000435]');
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
