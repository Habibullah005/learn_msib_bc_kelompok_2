const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const angkaPertama = generateRandomNumber(1, 10);
const angkaKedua = generateRandomNumber(1, 10);
const jawabanBenar = angkaPertama + angkaKedua;

rl.question(`angka pertama = ${angkaPertama}\nangka kedua = ${angkaKedua}\nBerapa hasil ${angkaPertama} + ${angkaKedua}? `, (jawaban) => {
  const jawabanPengguna = parseInt(jawaban);

  if (jawabanPengguna === jawabanBenar) {
    console.log('Selamat, jawaban Anda benar!');
  } else {
    console.log(`Maaf, jawaban Anda salah. Jawaban yang benar adalah ${jawabanBenar}.`);
  }

  rl.close();
});
