const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan panjang alas segitiga (dalam satuan tertentu): ', (panjangAlas) => {
  rl.question('Masukkan tinggi segitiga (dalam satuan tertentu): ', (tinggi) => {
    const panjangAlasSegitiga = parseFloat(panjangAlas);
    const tinggiSegitiga = parseFloat(tinggi);

    // Menghitung luas segitiga siku-siku
    const luasSegitiga = 0.5 * panjangAlasSegitiga * tinggiSegitiga;

    // Menghitung panjang sisi miring (hipotenusa)
    const panjangSisiMiring = Math.sqrt(panjangAlasSegitiga ** 2 + tinggiSegitiga ** 2);

    console.log(`Luas segitiga siku-siku adalah: ${luasSegitiga}`);
    console.log(`Panjang sisi miring (hipotenusa) adalah: ${panjangSisiMiring}`);

    rl.close();
  });
});
