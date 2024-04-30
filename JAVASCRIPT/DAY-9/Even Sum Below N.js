function sumOfEvenNumbers(num) {
    let sum = 0;
    for (let i = 2; i <= num; i += 2) {
      sum += i;
    }
    return sum;
  }
  

  const num = 6;

  console.log(sumOfEvenNumbers(num));
  