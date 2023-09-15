const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukkan angka pertama: ', (angkaPertama) => {
  rl.question('Masukkan angka kedua: ', (angkaKedua) => {
    const hasilPerkalian = parseInt(angkaPertama) * parseInt(angkaKedua)
    console.log(`Hasil Perkalian: ${hasilPerkalian}`)
    rl.close()
  })
})
