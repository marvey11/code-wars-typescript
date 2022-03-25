export function descendingOrder(n: number): number {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
      .join("")
  );
}
