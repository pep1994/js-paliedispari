/*
Creo gioco pari o dispari;
Generiamo un numero random per il primo PC da 1 a 5
Generiamo un numero random (sempre da 1 a 5) per il secondo computer.
 Sommiamo i due numeri e dichiariamo chi ha vinto.
 Il primo Pc vincerà se la somma sarà pari, mentre se sarà dispari vincerà il secondo PC
 */

 // creo una funzione che avrà il compito di generare un numero random compreso fra 1 e 5

 function numberRandom(numberMax, numberMin) {

    return Math.round(Math.random() * (numberMax - numberMin) + numberMin);
 }


// richiamo la funzione

var numberOne = numberRandom(5, 1); // variabile che contiene il valore ritornato dalla funzione, sarà il numero del PC 1

var numberTwo = numberRandom(5, 1); // variabile che contiene il valore ritornato dalla funzione, sarà il numero del PC 2



// creo una funzione per la somma dei due numeri

function numberSum(numero1, numero2) {

  var sum = numero1 + numero2;
  return sum;
}


// richiamo la funzione e assegno ad una variabili il valore ritornato nella funzione

var sumG = numberSum(numberOne, numberTwo);
console.log(sumG);


// creo una funzione per stabilire il vincitore in base alla somma se è pari o dispari
function victoryPc() {
  
  if (sumG % 2 == 0) {
    console.log("La somma dei due numeri è: " + sumG + ", " + "il numero è pari perciò vince il PC 1");
  } else {
    console.log("La somma dei due numeri è: " + sumG + ", " + "il numero è dispari perciò vince il PC 2");
  }
}

victoryPc();
