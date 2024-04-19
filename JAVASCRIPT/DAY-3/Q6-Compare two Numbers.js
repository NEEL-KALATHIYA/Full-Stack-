function compareTwo_Numbers(n1, n2) {
  if (n1 > n2) console.log(true);
  else console.log(false);

  if (n1 < n2) console.log(true);
  else console.log(false);

  if (n1 == n2) console.log(true);
  else console.log(false);
}

const n1 = process.argv[2],
  n2 = process.argv[3];

compareTwo_Numbers(n1, n2);
