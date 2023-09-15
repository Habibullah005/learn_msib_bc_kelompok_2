const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan angka pertama: ', (angkaPertama) => {
  rl.question('Masukkan angka kedua: ', (angkaKedua) => {
    const num1 = parseFloat(angkaPertama)
    const num2 = parseFloat(angkaKedua)

    if (num1 < num2) {
      console.log(`${num2} lebih besar dari ${num1}`)
    } else if (num1 > num2) {
      console.log(`${num1} lebih besar dari ${num2}`)
    } else {
      console.log('Angka-angka tersebut sama besar')
    }

    rl.close()
  })
})
