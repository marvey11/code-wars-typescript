/**
 * Write a simple parser that will parse and run Deadfish.
 *
 * Deadfish has 4 commands, each 1 character long:
 *
 * i increments the value (initially 0)
 * d decrements the value
 * s squares the value
 * o outputs the value into the return array
 *
 * Invalid characters should be ignored.
 * */
export function parse(data: string): number[] {
  const apply = (commands: string, value: number, output: number[]): number[] => {
    if (commands.length === 0) {
      return output;
    }

    const cmd = commands[0];
    return apply(
      commands.slice(1),
      "ids".includes(cmd) ? valueFun[cmd](value) : value,
      cmd === "o" ? [...output, value] : output
    );
  };

  return apply(data, 0, []);
}

export const parse2 = (data: string): number[] => {
  const reducer = (acc: [number, number[]], curr: string): [number, number[]] => {
    const [v, o] = acc;
    return ["ids".includes(curr) ? valueFun[curr](v) : v, curr === "o" ? [...o, v] : o];
  };
  const reduced = [...data].reduce(reducer, [0, []]);
  return reduced[1];
};

const valueFun: { [key: string]: (value: number) => number } = {
  i: (value) => value + 1,
  d: (value) => value - 1,
  s: (value) => value * value
};
