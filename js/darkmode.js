/* ************************************************  DARK MODE ***************************************************************************** 

- I tried "click" for the event  but discovered that because it is happening on an 'input' and not on a 'button', click doesn't work. 

- 'profilePage.classList.toggle("profile-page--darkmode", darkmodeSlider.checked);' would have worked too.

- I dont know how to make ↓↓↓ work.
.footer-nav__link--darkmode:hover {
  background-color: var(--darkrouge);
}

*/

const profilePage = document.querySelector('[data-js="profilePage"]');
const darkmodeSlider = document.querySelector('[data-js="darkmodeSlider"]');
const navbar = document.querySelector('[data-js="mainFooter"]');
const header = document.querySelector('[data-js="mainHeader"]');
const navlink = document.querySelector('[data-js="navLink"]');
const settingsSection = document.querySelector('[data-js="settingsDarkmode"]');

darkmodeSlider.addEventListener("change", () => {
  if (darkmodeSlider.checked) {
    profilePage.classList.add("profile-page--darkmode");
    settingsSection.style.borderTop = "1px solid white";
    header.classList.add("main-header--darkmode");
    navbar.classList.add("main-footer--darkmode");
    navlink.classList.add(
      "footer-nav__link--active--darkmode",
      "footer-nav__link--darkmode"
    );
  } else {
    profilePage.classList.remove("profile-page--darkmode");
    settingsSection.style.borderTop = "1px solid black";
    header.classList.remove("main-header--darkmode");
    navbar.classList.remove("main-footer--darkmode");
    navlink.classList.remove(
      "footer-nav__link--active--darkmode",
      "footer-nav__link--darkmode"
    );
  }
});

// document.documentElement.style.setProperty("--main-background-color", "green");
