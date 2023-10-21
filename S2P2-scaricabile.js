// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!)
quindi assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione 
(anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" 
basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 50, 20];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!

// creato algoritmo per calcolare il valore del carrello utilizzando ciclo for

let carrello = 0;

for (let i = 0; i <= prices.length - 1; i++) {
  carrello = carrello + prices[i];
}
console.log("Il valore del carrello è" + carrello);

// creato algoritmo per calcolare spesa di spedizione calcolata sul valore del carrello e sulla condizione isAmbassador true/false

let shippingCostNew = shippingCost; // valore variabile
if (carrello > 100) {
  if (utenteCheEffettuaLAcquisto.isAmbassador == true) {
    shippingCostNew = shippingCost - (shippingCost * 30) / 100;
  }
}

console.log("il valore della spedizione scontato del 30% è" + shippingCostNew);

let utenti = [marco];
console.log(utenti);

utenti.push(paul, amy);
console.log(utenti);

let utentiAmbassador = []; //undefined valorizzato dal ciclo for già esistente

for (let i = 0; i < utenti.length; i++) {
  if (utenti[i].isAmbassador == true) {
    console.log(utenti[i].name, utenti[i].lastName, "e' un ambassador");
    utentiAmbassador.push(utenti[i]); //utilizzo .push per aggiungere gli utenti ambassador alla variabile utentiAmbassador lasciata vuota nel momento in cui è stata creata
  } else {
    console.log(utenti[i].name, utenti[i].lastName, " non e' un ambassador");
  }
}

console.log(utentiAmbassador);
