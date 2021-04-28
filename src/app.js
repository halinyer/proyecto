import scrollTopButtom from "./components/bottom_scroll.js"
import darkMode from "./components/dark_mode.js"
import toggle from "./components/hamburger.js"

const d = document


d.addEventListener('DOMContentLoaded',()=>{
    toggle('#btn','.panel','.hamburger .hamburger-box','.aside-item')
    scrollTopButtom('.scroll-top-btn')
    darkMode('.dark-mode','color-blanco')
})