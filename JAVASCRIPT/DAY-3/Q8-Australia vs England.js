function Result(A,E) {
  let result;

  if (A == E) result = "Tie";
  else if (A < E) result = "England";
  else result = "Australia";

  return result;
}

const Australia = process.argv[2],
  England = process.argv[3];

console.log(Result(Australia, England));