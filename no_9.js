const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan jumlah detik: ', (jumlahDetik) => {
  const detik = parseInt(jumlahDetik);

  if (detik >= 0) {
    const jam = Math.floor(detik / 3600);
    const sisaDetik = detik % 3600;
    const menit = Math.floor(sisaDetik / 60);
    const detikSisa = sisaDetik % 60;

    console.log(`Waktu dalam format jam:menit:detik = ${jam}:${menit}:${detikSisa}`);
  } else {
    console.log('Maaf, jumlah detik harus lebih besar dari atau sama dengan 0.');
  }

  rl.close();
});
