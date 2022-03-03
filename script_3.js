let btn3 = document.getElementById("exo3");
btn3.addEventListener('click', event => {

  //FONCTION POUR CRÉER LA PYRAMIDE
  function stair(number){
    let n = number;
    let i = 0;

    while (n !== 0){
      i = i + 1;
      n = n - 1;
      let space = ' '.repeat(n);
      let hashtag = '#'.repeat(i);
      console.log(space + hashtag);
    }
  }

  //PROGRAMME PRINCIPAL
  let number = prompt('"Salut, bienvenue dans ma super pyramide ! Combien d\'étages veux-tu ?"');

  stair(number);

});
