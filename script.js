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
  












