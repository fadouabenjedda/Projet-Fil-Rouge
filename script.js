const burgerIcon = document.querySelector(`.menu_burger`);
const menu = document.querySelector(`.menu`);

burgerIcon.addEventListener(`click`, ()=>{
    menu.classList.toggle(`active`);
});



document.addEventListener(`scroll`,function(){
    const elements = document.querySelectorAll(`.slid_in_up`);
    const scrollTop = window.scrollY + window.innerHeight;
    elements.forEach((elements)=>{
        if (element.offsetTop < scrollTop){
            element.classList.add(`active`);
        }
    })
})











