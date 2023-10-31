export function theme_toggle () {
    const body = document.querySelector ("body");
    body.classList.toggle ("dark_mode");
    console.log ("Mode change")
}