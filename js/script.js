// array con email
const mailGuest = [
  'anna.g@yahoo.it', 
  'antonio.rossi@gmail.com', 
  'carlo.barbero@aruba.it', 
  'ele.landi@yahoo.com', 
  'fiore.milano@gmail.it', 
  'francesco.solerte@aruba.com'];


  // inserisci la tua mail
  const userMail = parseInt(prompt('Inserisci qui il tuo contatto'));

// ciclo for delle email e if

for (let i=0; i<mailGuest.length; i++) {
if (mailGuest[i] === userMail ) {
  console.log('Il contatto è presente in lista');
}

else { break; 
  console.log('Il contatto non è presente in lista');
}



}
