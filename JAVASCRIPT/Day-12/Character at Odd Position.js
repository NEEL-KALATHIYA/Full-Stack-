const Print_Odd_Str = () => {
  let string = "White";

  for (let i = 0; i < string.length; i++) {
    if (i % 2 == 1) console.log(string[i]);
  }
};

Print_Odd_Str();
