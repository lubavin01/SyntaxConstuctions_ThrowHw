export default function getNumber(number) {
  const res = Number(number);

  if (!res) {
    throw new Error('value is not a number');
  }

  return res;
}
