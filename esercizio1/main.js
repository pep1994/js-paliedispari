/*
Chiedo a utente di inserire come input una parola
tramite una funzione verifico se la parola inserita è palindroma o meno;
dò output a utente dicendogli che ho verificato
*/


var userWord = document.getElementById('user-input');
var userButton = document.getElementById('user-button');

userWord.value = ""; // imposto di default il valore vuoto all'input


// al click sul bottone il programa controlla se valore inserito dall'utente è una parola palindroma o meno
userButton.addEventListener("click",
  function () {
    var userWordValue = userWord.value;
    console.log(userWordValue);
    var spaceWord = userWordValue.split("");
    console.log(spaceWord);
    var reverseWord = spaceWord.reverse();
    console.log(reverseWord);
    var reverseWordString = reverseWord.join("");
    console.log(reverseWordString);

    // creo la condizione per la quale la parola inserita deve essere uguale al "revert" di se stessa
    if (userWordValue === reverseWordString) {
      document.getElementById('container').innerHTML = "<h1>" + "La parola inserita è palindroma" + "</h1>";
    } else {
      document.getElementById('container').innerHTML = "<h1>" + "La parola inserita non è palindroma" + "</h1>";
    }
  });
