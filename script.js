// Import for dark mode fra en annen script
import {theme_toggle} from "./theme_toggle.js";

//Verdier for hamburgermeny
const navBar = document.querySelector (".nav_bar_ID");
const hamburger = document.querySelector (".hamburger_ID");

let menu_open = false;

// Funksjon for åpning og lukking av hamburgermeny
function toggle_menu () {
    if (menu_open === false) {
        navBar.classList = "showNav";
        hamburger.classList = "open_menu";
        menu_open = true;
    } else {
        navBar.classList = "nav_bar_ID";
        hamburger.classList = "hamburger_ID";
        menu_open = false;
    }
}

// Knapp for dark mode
const toggle_button = document.querySelector ("#toggle_button_ID");

toggle_button.addEventListener ("click", theme_toggle);