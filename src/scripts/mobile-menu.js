const mobileMenu = () => {
  const menuButton = document.querySelector(".mobile-menu");

  if (!menuButton) return;

  const mobileMenu = document.querySelector(".header__nav");
  const body = document.querySelector("body");

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    body.classList.toggle("lock");
  });
};

export default mobileMenu;
