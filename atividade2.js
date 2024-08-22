const readline = require('readline');

// Cria uma interface para leitura de entrada e escrita de saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário que insira um número
rl.question('Digite um número para ver a tabuada: ', (input) => {
  const numero = parseInt(input);
  
  if (!isNaN(numero)) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${i}X${numero}=${i * numero}`);
    }
  } else {
    console.log('Por favor, insira um número válido.');
  }

  // Fecha a interface de leitura
  rl.close();
});
