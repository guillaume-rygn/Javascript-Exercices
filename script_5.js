let btn5 = document.getElementById("exo5");
btn5.addEventListener('click', event => {

  const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];


  //Livre emprunté au moins une fois
  let n = 0;

  books.forEach(book =>{
    if(book.rented === 0){
      n = n + 1;
      console.log(book.title + " n'a jamais été emprunté");
    }
  });

  if(n === 0){
    console.log("\n\nTous les livres ont déjà été emprunté au moins une fois !");
  };


  //Quel livre a été le plus emprunté
  let i = 0;
  let title;

  books.forEach(book =>{
    if(book.rented > i){
      i = book.rented
      title = book.title
    };
  });

  console.log("\n\nLe livre le plus emprunté est " + title + " avec " + i + " emprunts");


  //Quel est le livre le moins emprunté
  let a = books[0].rented;
  let b = 0;
  let titlebook;

  books.forEach(book =>{
    b = book.rented;
    if(b < a){
      a = book.rented
      titlebook = book.title
    };
  });

  console.log("\n\nLe livre le moins emprunté est " + titlebook + " avec " + a + " emprunts");


  //Trouve le livre avec l'ID 873495
  console.log("\n\n Retrouvons le livre avec l'ID 873495 :");
  let id = books.find(book => {
    return book.id === 873495
  });

  console.log(id);
  console.log("Le livre avec l'ID 873495 est " + id.title);


  //Supprimer le livre avec l'ID 133712
  let removeBook = books.filter(function(book){ 
    return book.id !== 133712;
  });
  console.log("\n\nVoici l'array avec le livre avec l'ID 133712 supprimé :");
  console.log(removeBook);


  //trie par ordre alphabétique
  function compare( a, b ) {
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
  };
  console.log("\n\nVoici l'array trié par ordre alphabétique :");
  console.log(removeBook.sort( compare ));

});
