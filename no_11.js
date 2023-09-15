const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tambah(angka1, angka2) {
  return angka1 + angka2;
}

function kurang(angka1, angka2) {
  return angka1 - angka2;
}

function bagi(angka1, angka2) {
  if (angka2 === 0) {
    return 'Tidak dapat membagi dengan nol';
  }
  return angka1 / angka2;
}

function kali(angka1, angka2) {
  return angka1 * angka2;
}

rl.question('Masukkan angka pertama: ', (angkaPertama) => {
  rl.question('Masukkan angka kedua: ', (angkaKedua) => {
    rl.question('Pilih operasi (a: Pertambahan, b: Pengurangan, c: Pembagian, d: Perkalian): ', (operasi) => {
      const num1 = parseFloat(angkaPertama);
      const num2 = parseFloat(angkaKedua);

      let hasil;

      switch (operasi) {
        case 'a':
          hasil = tambah(num1, num2);
          break;
        case 'b':
          hasil = kurang(num1, num2);
          break;
        case 'c':
          hasil = bagi(num1, num2);
          break;
        case 'd':
          hasil = kali(num1, num2);
          break;
        default:
          hasil = 'Operasi tidak valid';
      }

      console.log(`Hasil operasi: ${hasil}`);
      rl.close();
    });
  });
});
