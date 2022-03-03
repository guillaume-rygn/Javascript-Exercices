let btn2 = document.getElementById("exo2");
btn2.addEventListener('click', event => {

  //FONCTION POUR LE CALCUL DU FACTORIEL
  function factorielle(number){
    let i = number;
    answer = number;

    while (i !== 1){
      i --;
      answer = answer*i;
    }
    return answer;
  }

  //PROGRAMME PRINCIPAL
  let answer = 0;
  let number = prompt('"De quel nombre veux-tu calculer la factorielle ?"');
  factorielle(number);

  console.log(`"Le résultat est : ${answer}"`);

});