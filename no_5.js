const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukkan angka range: ', (range) => {
  const rangeValue = parseInt(range)
  let sumOfOddNumbers = 0;

  for (let i = 1; i <= rangeValue; i++) {
    if (i % 2 !== 0) {
      sumOfOddNumbers += i;
    }
  }

  console.log(`Jumlah bilangan ganjil dari 1 hingga ${rangeValue}: ${sumOfOddNumbers}`)
  rl.close()
})
