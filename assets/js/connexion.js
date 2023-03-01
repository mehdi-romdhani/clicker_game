let btnConnexion = document.querySelector('#btn-connect');

/********Function Connexion********/

function connect(){
    fetch("connexion.php")
    .then((response) => {
      //Formatage de la reponse sous format TXT
      return response.text();
    })
    .then((text) => {
      //Container pour les formulaires
      let containerForm = document.querySelector(".form-container");
      //Affichage du formulaire
      containerForm.innerHTML = text;
      //Container formulaires
      let formulaireConnexion = document.querySelector("#form_connexion");
      formulaireConnexion.addEventListener("submit", (e) => {
        //Permet de stopper le comportement par default du formulaire
        e.preventDefault();
        console.log("toto");
        //Instance de la classe formData pour recuperer les data du Formulaire
        let dataFormulaire = new FormData(formulaireConnexion); //
        // API FETCH POUR AVOIR UN COMPORTEMENT ASYNCHRONE
        fetch("connexion.php", {
          // Url Requete
          method: "POST",
          body: dataFormulaire,
        })
          .then((response) => {
            //Formatage de la reponse sous format text
            return response.text();
          })
          .then((textReponse) => {
            //Conditions suite à la reponse de la requette FETCH
            if (textReponse === "Connexion réussie") {
              window.location.href = "game.php";
            } else {
              //Si la condition ci-dessus n'est pas remplie, la réponse sera renvoié automatiquement
              let messForm = document.querySelector("#mess_done");
              messForm.innerHTML = textReponse;
              console.log(textReponse);
            }
          });
      });
    });
}

/***********BTN-EVENT************/
btnConnexion.addEventListener('click',(e)=>{
    e.preventDefault;
    connect();
})