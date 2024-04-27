const putNumber = (id) => {
    return parseInt(document.getElementById(id).value);
  };
  
  const printResult = (result) => {
    document.getElementById("result").innerHTML = result;
  };
  
  const getResult = () => {
    const n1 = putNumber("n1"),
      n2 = putNumber("n2"),
      n3 = putNumber("n3"),
      n4 = putNumber("n4"),
      n5 = putNumber("n5");
  
    const result = `Final Product is :  ${n1 * n2 * n3 * n4 * n5}`;
  
    printResult(result);
  };
  