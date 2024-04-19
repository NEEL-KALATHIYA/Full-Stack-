function Largest(n1, n2) {
    let result;
    if (n1 == n2) result = "Both are Equal";
    else if (n1 > n2) result = n1 + " is a largest number";
    else result = n2 + " is a largest number";
  
    return result;
  }
  
  const n1 = Number(process.argv[2]),
    n2 = Number(process.argv[3]);
  
  console.log(Largest(n1, n2));