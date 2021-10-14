function decimalToBinary(num) {
  let intPart = Math.floor(num);
  let fracPart = num - Math.floor(num)
  let intBinaryStr = '';
  let fracBinaryStr = '';
      
  // find binary digits of integer part
  if (intPart) {
    intBinaryStr = integerToBinary(intPart)
  }
  
  // find binary digits of fractional part
  if (fracPart) {
    fracBinaryStr = fractionToBinary(fracPart)
  }
  
  return intBinaryStr + fracBinaryStr;
}

function integerToBinary (num) {
  let binStr = ''
  let remainder = num;
  while(remainder > 0) {
    binStr = (remainder % 2).toString() + binStr;
    remainder = Math.floor(remainder / 2);
  }
  return binStr;
}

function fractionToBinary (num) {
  let binStr = '';
  let remainder = num;
  let count = 16;
  
  binStr = binStr + '.';
  while(remainder > 0 && count > 0) {
    let product = remainder * 2;
    binStr = binStr + Math.floor(product).toString();
    remainder = product - Math.floor(product);
    count--;
  }
  return binStr;
}