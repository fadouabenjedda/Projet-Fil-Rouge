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


// document.addEventListener('DOMContentLoaded', () => {
//     const hiddenElements = document.querySelectorAll('.hidden');

//     // Fonction pour vérifier si l'élément est visible dans la fenêtre
//     const isVisible = (element) => {
//         const rect = element.getBoundingClientRect();
//         return rect.top < window.innerHeight && rect.bottom > 0;
//     };

//     // Fonction pour ajouter la classe "show" aux éléments visibles
//     const checkVisibility = () => {
//         hiddenElements.forEach(element => {
//             if (isVisible(element)) {
//                 element.classList.add('show');
//             }
//         });
//     };

//     // Exécuter la vérification lors du scroll
//     window.addEventListener('scroll', checkVisibility);

//     // Vérification initiale au chargement de la page
//     checkVisibility();
// });









