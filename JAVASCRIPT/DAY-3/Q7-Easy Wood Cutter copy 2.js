function Divisable(n) {
    if (n % 3 == 0) return "Yes";
    else return "No";
  }
  
  const N = parseInt(process.argv[2]);
  
  console.log(Divisable(N));