// Import for dark mode fra en annen script
import {theme_toggle} from "./theme_toggle.js";

//Verdier for hamburgermeny
const nav_bar = document.querySelector ("#nav_bar_ID");
const hamburger = document.querySelector ("#hamburger_ID");

let nav_open = false;

// Funksjon for åpning og lukking av hamburgermeny
function toggle_nav_bar () {
    if (nav_open === false) {
        nav_bar.classList = "show_nav";
        hamburger.classList = "open_menu";
        nav_open = true;
    } else {
        nav_bar.classList = "nav_bar_ID";
        hamburger.classList = "hamburger_ID";
        nav_open = false;
    }
}

// Knapp for dark mode
const toggle_button = document.querySelector ("#toggle_button_ID");

toggle_button.addEventListener ("click", theme_toggle);