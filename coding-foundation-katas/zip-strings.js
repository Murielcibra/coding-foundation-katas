function zipStrings(strA, strB) {
  // Add you solution here
  let result = "";
  let strAArr = strA.split("");
  let strBArr = strB.split("");
  let leftOversInB = "";
  if (strA != "") {
    for (let i = 0; i < strAArr.length; i++) {
      let currentValueInB = "";
      if (i < strBArr.length) {
        currentValueInB = strBArr[i];
        leftOversInB = strB.substring(i + 1);
      }
      result = result + strAArr[i] + currentValueInB;
    }
    result = result + leftOversInB;
  } else {
    result = strB;
  }
  return result;
}
