const d  = document

let sun = "☀️"
let moon = "🌙"

export default function darkMode(btn,style) {
   let $btnThema = d.querySelector(btn)
   let $selector = d.querySelectorAll("[modo-blanco]")
    d.addEventListener('click', (e) =>{
       
        if (e.target.matches(btn)) {
           if ($btnThema.textContent === moon) {
               $selector.forEach(el => el.classList.add(style))
               $btnThema.textContent = sun
           }else{
            $selector.forEach(el => console.log(el))
               $selector.forEach(el => el.classList.remove(style))
               e.target.textContent = moon
           }
        }
    })
}




