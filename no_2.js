const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Masukkan suhu dalam Celsius: ', (celsius) => {
  const fahrenheit = (celsius * 9/5) + 32
  console.log(`Suhu dalam Fahrenheit: ${fahrenheit}`)
  rl.close()
})
