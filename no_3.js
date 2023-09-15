const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukkan harga item pertama: ', (hargaItemPertama) => {
  rl.question('Masukkan harga item kedua: ', (hargaItemKedua) => {
    rl.question('Masukkan harga item ketiga: ', (hargaItemKetiga) => {
      const totalHarga = parseInt(hargaItemPertama) + parseInt(hargaItemKedua) + parseInt(hargaItemKetiga)
      console.log(`Total harga belanjaan: ${totalHarga}`)
      rl.close()
    })
  })
})
