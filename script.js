const burgerIcon = document.querySelector(`.menu_burger`);
const menu = document.querySelector(`.menu`);

burgerIcon.addEventListener(`click`, ()=>{
    menu.classList.toggle(`active`);
});

let articles = [
    { id: 1, title: "Figma", content: "Figma est un excellent outil de design collaboratif. Il permet de créer des prototypes interactifs et de travailler en temps réel avec d'autres personnes." },
    { id: 2, title: "GitHub", content: "GitHub est un service d'hébergement de projets de développement qui utilise Git pour le versionnage. Apprenez à collaborer, partager et gérer vos projets sur cette plateforme." },
    { id: 3, title: "JavaScript", content: "JavaScript est un langage de programmation essentiel pour le développement web. Apprenez à manipuler le DOM, à créer des fonctions et à ajouter des interactions dynamiques à vos sites." }
  ];
  
  // Fonction pour afficher les articles
  function afficherArticles() {
    const articlesDiv = document.getElementById("articles");
    articlesDiv.innerHTML = ""; 
  
    articles.forEach(article => {
      const articleDiv = document.createElement("div");
      articleDiv.className = "article";
      articleDiv.innerHTML = `
      <h3>${article.title}</h3>
        <p>${article.content}</p>
      `;
      articlesDiv.appendChild(articleDiv);
    });
  }
  
  afficherArticles();
  


// // Tableau pour stocker les articles
// let articles = [
//     { id: 1, title: "Figma", content: "Figma est un outil de design collaboratif très populaire pour créer des interfaces utilisateur et des prototypes. Accessible depuis un navigateur, il offre des fonctionnalités puissantes pour les débutants comme pour les experts." },
//     { id: 2, title: "GitHub", content: "GitHub est une plateforme incontournable pour les développeurs. Elle permet de gérer des projets, collaborer avec des équipes et versionner du code." }
//     { id: 3, title: "Javascript" , content: "Grâce à JavaScript, vous pouvez transformer une page statique en une expérience utilisateur fluide et engageante. Ce langage est également compatible avec des frameworks modernes comme React, Vue.js, et Angular."}
//   ];
  
// //   Fonction pour afficher les articles
//   function afficherArticles() {
//     const articlesDiv = document.getElementById("articles");
//     articlesDiv.innerHTML = "";
  
//     articles.forEach(article => {
//       const articleDiv = document.createElement("div");
//       articleDiv.className = "article";
//       articleDiv.innerHTML = ` <h3>${article.title}</h3> <p>${article.content}</p>`;
//       articlesDiv.appendChild(articleDiv);
//     });
//   }
  
//   afficherArticles();













