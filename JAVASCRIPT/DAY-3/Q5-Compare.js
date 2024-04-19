function cp(n1, n2=0) {
    if (n1 > n2) return true;
    else return false;
  }
  
  let n1 = Number(process.argv[2]),
    n2 = Number(process.argv[3]),
    n3 = parseInt(process.argv[4]);
  
  console.log(cp(n1, n2));
  
  n1 += n3;
  
  console.log(cp(n1, n2));