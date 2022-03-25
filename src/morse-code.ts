const MORSE_CODE: { [key: string]: string } = {
  // letters

  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "S",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",

  // digits

  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",

  // special service codes

  "···−−−···": "SOS"
};

/**
 * In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice
 * and digital data communication channels, it still has its use in some applications around the world.
 *
 * The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded
 * as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally
 * capital letters are used. When the message is written in Morse code, a single space is used to separate the
 * character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code
 * is ···· · −·−−   ·−−− ··− −·· ·.
 *
 * NOTE: Extra spaces before or after the code have no meaning and should be ignored.
 *
 * In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of
 * those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···.
 * These special codes are treated as single special characters, and usually are transmitted as separate words.
 *
 * Your task is to implement a function that would take the morse code as input and return a decoded human-readable
 * string.
 */
export const decodeMorse = (morseCode: string): string => {
  const decodeWord = (morseWord: string): string => {
    return morseWord
      .split(" ")
      .map((char) => MORSE_CODE[char])
      .join("");
  };

  return morseCode.trim().split("   ").map(decodeWord).join(" ");
};

export const decodeBits = (bits: string): string => {
  const mapping: { [key: string]: string } = {
    "111": "-",
    "000": " ",
    "1": ".",
    "0": "",
    "0000000": "   "
  };

  const mappingKeys = Object.keys(mapping);

  const mapGroup = (group: string, times: number): string => {
    const key = mappingKeys.filter((k) => k.repeat(times) === group)[0];
    return mapping[key];
  };

  // trim leading and trailing zeroes and split the remaining string into groups of zeroes and ones
  const groups = bits
    .replace(/^[0]+/, "")
    .replace(/[0]+$/, "")
    .match(/([01])\1*/g);

  if (!groups) return "";

  // we determine the transmission rate from the minimum lengths of these groups
  const rate = Math.min(...groups.map((x) => x.length));

  return groups.map((x) => mapGroup(x, rate)).join("");
};
