// definizione delle variabili random

const randomPcNumber = [];
const randomUserNumber = [];

for (let i=0; i<1; i++) {
  const randomPcNumber = Math.floor(Math.random() *6 +1)
  const randomUserNumber = Math.floor(Math.random() *6 +1)

  console.log (randomPcNumber, randomUserNumber);
}