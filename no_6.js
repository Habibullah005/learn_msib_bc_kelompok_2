const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function faktorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * faktorial(n - 1);
  }
}

rl.question('Masukkan sebuah bilangan positif: ', (bilangan) => {
  const bilanganPositif = parseInt(bilangan);

  if (bilanganPositif >= 0) {
    const hasilFaktorial = faktorial(bilanganPositif);
    console.log(`${bilanganPositif}! = ${hasilFaktorial}`);
  } else {
    console.log('Maaf, bilangan yang dimasukkan harus positif.');
  }

  rl.close();
});
