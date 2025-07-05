// definizione delle variabili random

const randomPcNumber = [];
const randomUserNumber = [];

// ciclo e creazione dei numeri random

for (let i=0; i<1; i++) {
  const randomPcNumber = Math.floor(Math.random() *6 +1)
  const randomUserNumber = Math.floor(Math.random() *6 +1)
  console.log (randomPcNumber, randomUserNumber);

  // confronto fra i numeri ed elenco delle possibilità di avanzamento del programma

if ( randomPcNumber > randomUserNumber) {
  console.log (`Il computer ha tirato ${randomPcNumber}, mentre tu hai tirato ${randomUserNumber} : hai perso!`)
}

else if (randomPcNumber < randomUserNumber) {
console.log (`Il computer ha tirato ${randomPcNumber}, mentre tu hai tirato ${randomUserNumber} : hai vinto!`)
}

else {
  console.log (`Tu e il computer avete pareggiato: ${randomPcNumber} a ${randomUserNumber} `)
}
}