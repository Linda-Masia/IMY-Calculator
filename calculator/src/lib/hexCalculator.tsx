function hexToDecimal(hex :string): number{
    return parseInt(hex, 16)
}

function decimalToHex(dec: number): string {
    return Math.floor(dec).toString(16).toUpperCase().padStart(1, '0');
}

export function calculateHex(
    hex1: string,
    hex2: string,
    operation: '+'| '-'| '*' | '/'
) : string {
    
  if (!/^[0-9A-F]{1,2}$/i.test(hex1) || !/^[0-9A-F]{1,2}$/i.test(hex2)) {
    return 'ERROR: Invalid Input';
  }

  const dec1 = hexToDecimal(hex1);
  const dec2 = hexToDecimal(hex2);

  let result: number;

  switch (operation) {
    case '+':
      result = dec1 + dec2;
      break;
    case '-':
      result = dec1 - dec2;
      if (result < 0) return 'ERROR: Negative Result';
      break;
    case '*':
      result = dec1 * dec2;
      break;
    case '/':
      if (dec2 === 0) return 'ERROR: Divide by Zero';
      result = Math.floor(dec1 / dec2);
      break;
    default:
      return 'ERROR: Invalid Operation';
  }

  if (result > 0xFFFF) return 'ERROR: Overflow';

  return decimalToHex(result).padStart(4, '0');
}
