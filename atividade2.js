const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para ver a tabuada: ', (input) => {
  const numero = parseInt(input);
  
  if (!isNaN(numero)) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${i}X${numero}=${i * numero}`);
    }
  } else {
    console.log('Por favor, insira um número válido.');
  }

  rl.close();
});
