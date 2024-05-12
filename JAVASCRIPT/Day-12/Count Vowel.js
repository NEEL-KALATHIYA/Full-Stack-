const Print_Vowel = () => {
    
  let string = "Red and White";
  let result = 0;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "A" ||
      string[i] == "E" ||
      string[i] == "I" ||
      string[i] == "O" ||
      string[i] == "U" ||
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u"
    )
      result++;
  }
  console.log(result);
};

Print_Vowel();
