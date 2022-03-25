export const multiples = (number: number): number => {
  return number < 0
    ? 0
    : [...Array(number).keys()].filter((n) => n % 3 === 0 || n % 5 === 0).reduce((prev, curr) => prev + curr, 0);
};
