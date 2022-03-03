let btn1 = document.getElementById("exo1");
btn1.addEventListener('click', event => {

  //ECRIRE BONJOUR MONDE EN CONSOLE
  console.log("\"Bonjour monde\"");


  //ÉCRIRE BONJOUR {PRÉNOM} EN CONSOLE
  let nameStudent = prompt('Quel est ton prénom :');
  let statement = `\"Bonjour, ${nameStudent} !\"`;
  console.log(statement);

});



