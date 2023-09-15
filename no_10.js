const crypto = require('crypto-js');

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk melakukan enkripsi
function encrypt(text, key) {
  const ciphertext = crypto.AES.encrypt(text, key).toString();
  return ciphertext;
}

// Fungsi untuk melakukan dekripsi
function decrypt(ciphertext, key) {
  const bytes = crypto.AES.decrypt(ciphertext, key);
  const plaintext = bytes.toString(crypto.enc.Utf8);
  return plaintext;
}

rl.question('Masukkan sebuah kata: ', (kata) => {
  rl.question('Masukkan kunci rahasia: ', (kunci) => {
    const ciphertext = encrypt(kata, kunci);
    console.log(`Chipertext: ${ciphertext}`);

    rl.question('Masukkan kembali kunci rahasia: ', (kunciDekripsi) => {
      if (kunci === kunciDekripsi) {
        const plaintext = decrypt(ciphertext, kunci);
        console.log(`Plaintext: ${plaintext}`);
      } else {
        console.log('Kunci rahasia yang dimasukkan tidak cocok.');
      }

      rl.close();
    });
  });
});
