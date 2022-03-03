let btn7 = document.getElementById("exo7");
btn7.addEventListener('click', event => {

    //FONCTION POUR LES LETTRES MAJUSCULES
    function letterTrue(a){
      if (a === ""){
        letterUpcase = 0;
        return letterUpcase;
      }else{
        a = a.split("");
        a.forEach(letter => {
          if  (letter.toUpperCase() == letter && regexTest.test(letter) === true){
            letterUpcase = letterUpcase*1;
          }else{
            letterUpcase = letterUpcase*0;
          };
        }); 
        return letterUpcase;
      };
    };

    //FONCTION POUR LE MOT FORTNITE
    function containFortnite(a){
      if (a === ""){
        return fortniteWord;
      }else{
        a = a.split(" ");
        a.forEach(word => {
          if  (word == "Fortnite"){
            fortniteWord = fortniteWord + 1;
          };
        }); 
        return fortniteWord;
      };
    };

    //FONCTION POUR LES RÉPONSES
    function botAnswer(response){

      answer = 0;
        if (response.split("").pop() === "?"){
        console.log("\nOuais Ouais...");
        answer = 1;
      } else if(letterTrue(response) === 1 && answer === 0){
        console.log("Pwa, calme-toi...");
        answer = 1;   
      }
      else if(containFortnite(response) === 1 && answer === 0){
        console.log("on s' fait une partie soum-soum ?");
        answer = 1;   
      } else if(response === "" && answer === 0){
        console.log("t'es en PLS ?");
        answer = 1;   
      } else {
        console.log("balek.");
      };
    };

    //PROGRAMME PRINCIPAL
    console.log("Bonjour Humain, je suis Aptode721 ton IA de discussion !\n\n");
    let continuetalk = 0;
    let talk;
    let letterUpcase = 1;
    let fortniteWord = 0;
    const regexTest = new RegExp(/[A-Z]/);
    let response;
    let answer;


    while (continuetalk === 0){
      response = prompt('Pose moi une question :'); 
      fortniteWord = 0;
      letterUpcase = 1;

      botAnswer(response);
      talk = prompt ("Tu veux continuer à parler ? non pour arreter")
      if (talk === "non" || talk === "NON"){
        break;
      }
    };

    console.log("\n\nMerci d'avoir joué avec moi !\n\nsigné : Aptode721");

});