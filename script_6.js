let btn6 = document.getElementById("exo6");
btn6.addEventListener('click', event => {

  //FONCTION POUR LA DÉCOUPE DU STRING ARN EN STEP DE 3
  function slice(ARN){
    let index = 0;

    for(index; index < ARN.length ; index += 3){
      proteine.push(ARN.slice(index, index + 3));
    };

    return proteine;
  };

  //FONCTION POUR ÉCRIRE LES CORRESPONDANCES À L'ARN
  function result(proteine){
    let result;
    proteine.forEach(selection =>{
      if(selection === "UCU" || selection === "UCC" || selection === "UCA" || selection === "UCG" || selection === "AGU" || selection === "AGC"){
        result = "Sérine";
        finalresult.push(result);
      }else if(selection === "CCU" || selection === "CCC" || selection === "CCA" || selection === "CCG"){
        result = "Proline";
        finalresult.push(result);
      }else if(selection === "UUA" || selection === "UUG"){
        result = "Leucine";
        finalresult.push(result);
      }else if(selection === "UUU" || selection === "UUC"){
        result = "Phénylalanine";
        finalresult.push(result);
      }else if(selection === "CGU" || selection === "CGC" || selection === "CGA" || selection === "AGA" || selection === "AGG"){
        result = "Arginine";
        finalresult.push(result);
      }else if(selection === "UAU" || selection === "UAC"){
        result = "Tyrosine";
        finalresult.push(result);
      }else{
        error = 1;
        console.log("Tu as du faire une erreur dans ton ARN cela ne correspond pas à une protéine")
      };
    });
    return error
  };

  //PROGRAMME PRINCIPAL
  let proteine = [];
  let finalresult = [];
  let error = 0;
  let ARN = prompt('Donne moi ton ARN :'); 
  slice(ARN);
  result(proteine);

  if (error === 0) {
    console.log("Voici la traduction de ton ARN en protéine :\n\n")
    console.log(finalresult.join("-"));
  };

});