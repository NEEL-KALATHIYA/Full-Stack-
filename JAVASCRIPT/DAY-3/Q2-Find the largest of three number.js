function Largest(n1, n2 = 0, n3 = 0) {
  if (n1 > n2 && n1 > n3) return n1;
  else if (n2 > n3 && n2 > n1) return n2;
  else return n3;
}

const n1 = process.argv[2],
  n2 = process.argv[3],
  n3 = process.argv[4];

console.log("Largest Number is : " + Largest(n1, n2, n3));
