const d = document
export default function toggle(btn,panel,btnBox,item) {
    document.addEventListener('click',(e) =>{
       if (e.target.matches(btn) || e.target.matches(btnBox)) {
           d.querySelector(btn).classList.toggle('is-active')
           d.querySelector(panel).classList.toggle('active')
       } 

       if (e.target.matches(item)) {
        d.querySelector(btn).classList.remove('is-active')
        d.querySelector(panel).classList.remove('active')
       }
    })
}