export default function getNumber(number) {
  const res = Number(number);

  if (!res || number.toLowerCase().startsWith('0x')) {
    throw new Error('value is not a number in 10 TIC system');
  }

  return res;
}
