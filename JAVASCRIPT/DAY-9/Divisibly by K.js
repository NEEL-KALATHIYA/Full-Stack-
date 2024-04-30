function pNDivisibleByK(num, k) {
    for (let i = 1; i <= num; i++) {
      if (i % k === 0) {
        console.log(i);
      }
    }
  }
  const num = 7;
  const k = 2;

  pNDivisibleByK(num, k);
  