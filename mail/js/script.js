// array con email
const mailGuest = [
  'anna.g@yahoo.it', 
  'antonio.rossi@gmail.com', 
  'carlo.barbero@aruba.it', 
  'ele.landi@yahoo.com', 
  'fiore.milano@gmail.it', 
  'francesco.solerte@aruba.com'];

  console.log(mailGuest);

// inserisci la tua mail
  const userMail = prompt('Inserisci qui il tuo contatto');

// utilizzo valore booleano per indicare "trovato/non trovato in lista"
  let found = 0;

// ciclo for delle email e if
// break se la mail viene trovata e uscita dal ciclo

for (let i=0; i<mailGuest.length; i++) {
if (mailGuest[i] === userMail ) {break}
found = 1;
}

// secondo if - else successivo all'uscita dal ciclo precedente

if (found = 1) {
  console.log('Il contatto è presente in lista');
} 
else {
  console.log('Il contatto non è presente in lista');
}