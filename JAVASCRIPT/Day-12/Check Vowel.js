const check_Vowel = () => {
  let string = "Red";

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
      return true;
  }

  return false;
};

console.log(check_Vowel());
