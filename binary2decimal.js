function binaryToDecimal(binNumStr) {
  let num;
  // Parse the integer and fractional portions
  if (binNumStr.indexOf('.') !== -1) {
    let idx = binNumStr.indexOf('.');
    let intStr = binNumStr.slice(0, idx);
    let fracStr = binNumStr.slice(idx + 1);
    
    num = binaryToInteger(intStr) +
          binaryToFraction(fracStr);
  }
  else {
    num = binaryToInteger(binNumStr);
  }
  return num;
}

function binaryToInteger(binStr) {
  let int = 0;
  let strLen = binStr.length;

  for (let i = 1 ; i <= strLen; i++) {
    let num = parseInt(binStr[i - 1]);
    int = int + num*(2**(strLen - i));
  }
  return int;
}

function binaryToFraction(binStr) {
  let frac = 0;
  let strLen = binStr.length;

  for (let i = 1; i <= strLen; i++) {
    let num = parseInt(binStr[i - 1]);
    frac = frac + num*(2**(-i));
  }
  return frac;
}