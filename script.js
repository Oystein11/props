// Import for dark mode fra en annen script
import {theme_toggle} from "./theme_toggle.js";

// html elements we need to use javascript on
const nav_bar = document.querySelector(".nav_bar_ID");
const menu= document.querySelector(".hamburger");
// tracks if the navbar is opened or not
let menu_open = false;

// toggles navbar and changes the styling
function toggle_nav() {
  if (menu_open === false) {
    nav_bar.classList = "show_nav";
    menu.classList = "open_menu";
    menu_open = true;
  } else {
    nav_bar.classList = "nav_bar_ID";
    menu.classList = "hamburger";
    menu_open = false;
  }
}

// Knapp for dark mode
const toggle_button = document.querySelector ("#toggle_button_ID");

toggle_button.addEventListener ("click", theme_toggle);