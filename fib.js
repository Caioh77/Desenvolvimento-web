function fibonacci (n){
    if (n < 0 ) return "número negativo, tente novamente"
  
    let fib1 = 0
    let fib2 = 1
    let fib3;
    let fibString = `${fib1} ${fib2}`
    for (let i = 2; i < n; i++) {
      fib3 = fib1 + fib2;
      fib1 = fib2
      fib2 = fib3
      
      fibString += ` ${fib3}`
    }
  
    return fibString;
  }
  
  console.log(fibonacci(10));