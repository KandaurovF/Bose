const refs = {
  navMenu: document.querySelector(".js-nav-menu"),
  closeNavMenuBtn: document.querySelector(".js-close-nav-menu"),
  menuLinks: document.querySelectorAll(".menu-nav-link"),
  navMenuBtn: document.querySelector(".header-menu-btn"),
  burgerMenu: document.querySelector(".js-burger-menu"),
  hoveredBurgerMenu: document.querySelector(".js-burger-menu-hover"),

  menuBtnHover() {
    refs.burgerMenu.style.display = "none";
    refs.hoveredBurgerMenu.style.display = "inline";
  },
  menuBtnDefault() {
    refs.burgerMenu.style.display = "inline";
    refs.hoveredBurgerMenu.style.display = "none";
  },
};

refs.navMenuBtn.addEventListener("mouseenter", refs.menuBtnHover);
refs.navMenuBtn.addEventListener("mouseleave", refs.menuBtnDefault);

refs.navMenuBtn.addEventListener("click", toggleMenu);
refs.closeNavMenuBtn.addEventListener("click", toggleMenu);
refs.menuLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  refs.navMenu.classList.toggle("is-open");
}
