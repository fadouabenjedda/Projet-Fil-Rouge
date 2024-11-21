const burgerIcon = document.querySelector(`.menu_burger`);
const menu = document.querySelector(`.menu`);

burgerIcon.addEventListener(`click`, ()=>{
    menu.classList.toggle(`active`);
});













// emailjs.init("-XVxAGhylANCibEBM");
// document.getElementById(`contact_form`).addEventListener(`submit`,function(event){

//     event.preventDefault();

//     const nom = document.getElementById(`form_nom`).value;
//     const email = document.getElementById(`form_email`).value;
//     const message = document.getElementById(`form_message`).value;

//     if(!nom || !email || !message){
//         alert("Veuillez remplir tous les champs !");
//         return;
//     }

//     const params = {
//         nom : nom,
//         email : email,
//         message: message,
//     };


//     emailjs.send("service_r3wx7qf","template_7pcaj3n",params)
   

//     .then(function(){
//         alert("Message envoyé avec succsès !");
//         document.getElementById(`contact_form`).reset();
//     })

//     .catch(function(error) {
//         alert("Une erreur est survenue.");
//     });
// });

    



