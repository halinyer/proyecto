import toggle from "./components/hamburger.js"

const d = document


d.addEventListener('DOMContentLoaded',()=>{
    toggle('#btn','.panel','.hamburger .hamburger-box','.aside-item')
})