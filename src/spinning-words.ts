export function spinWords(words: string): string {
  return words
    .split(" ")
    .map((word: string) => (word.length < 5 ? word : word.split("").reverse().join("")))
    .join(" ");
}
