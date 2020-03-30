/*
Creo gioco pari o dispari;
Generiamo un numero random per il primo PC da 1 a 5
Generiamo un numero random (sempre da 1 a 5) per il secondo computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.
 Il primo Pc vincerà se la somma sarà pari, mentre se sarà dispari vincerà il secondo PC
 */

var outputMsg;

 // creo una funzione che avrà il compito di generare un numero random compreso fra 1 e 5

 function numberRandom(numberMax, numberMin) {

    var number = Math.round(Math.random() * (numberMax - numberMin) + numberMin);
    return number;
 }


var numberOne = numberRandom(5, 1); // richiamo funzione salvandomi in una variabile il valore che ritorna

var numberTwo = numberRandom(5, 1); // richiamo funzione salvandomi in una variabile il valore che ritorna



// creo una funzione per la somma dei due numeri

function numberSum(numero1, numero2) {

  var sum = numero1 + numero2;
  return sum;
}


// richiamo la funzione e assegno ad una variabili il valore ritornato nella funzione

var sumG = numberSum(numberOne, numberTwo); // richiamo funzione salvandomi in una variabile il valore che ritorna


// creo una funzione per stabilire il vincitore in base alla somma se è pari o dispari
function victoryPc(somma) {

  if (somma % 2 == 0) {
    var msg = "La somma dei due numeri è: " + somma + ", " + "il numero è pari perciò vince il PC 1";

  } else {
    msg = "La somma dei due numeri è: " + somma + ", " + "il numero è dispari perciò vince il PC 2";
  }
  return msg;
}

outputMsg = victoryPc(sumG); // richiamo funzione salvandomi in una variabile il valore che ritorna


// funzione per output attraverso il clik sul bottone

function play() {

  var buttonPlay = document.getElementById('button');
  buttonPlay.addEventListener('click',

    function () {
      document.getElementById('container').innerHTML = "<h4>" + outputMsg + "</h4>"; // output
      document.getElementById('play-again').className = "visible"; // aggiunta di classe che fa apparire il pulsante "play again"
      document.getElementById('button').className = "hidden"; // aggiunta classe che fa sparire il pulsante "play"

  });

}

play(); // richiamo funzione


// al click su "play again" riparte la sfida tra i due PC e abbiamo l'output del nuovo risultato
function playAgain() {

  var buttonPlayAgain = document.getElementById('play-again');
  buttonPlayAgain.addEventListener('click',

    function () {
      var numberOne2 = numberRandom(5, 1);
      var numberTwo2 = numberRandom(5, 1);
      var sumG2 = numberSum(numberOne2, numberTwo2);
      var outputMsg2 = victoryPc(sumG2);
      document.getElementById('container').innerHTML = "<h4>" + outputMsg2 + "</h4>"; // output

  });

}

playAgain(); // richiamo funzione
