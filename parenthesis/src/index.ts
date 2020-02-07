import * as _ from 'lodash';

const isValid = (s: string): boolean => {
  let valid = 0;
  for (let i = 0; i < s.length; i = i + 1) {
    const char = s.charAt(i);
    if (char === '(') valid = valid + 1;
    if (char === ')') valid = valid - 1;

    if (valid < 0) return false;
  }
  return valid === 0;
};

const removeCharAt = (s: string, index: number): string => {
  if (index < 0) throw Error('Invalid "index"');
  if (index >= s.length) throw Error('Invalid "index"');

  const i = Math.floor(index);
  return `${s.slice(0, i)}${s.slice(i + 1, s.length)}`;
};

const removeParenthesis = (s: string): string[] => {
  if (!s) return [];
  if (s.length < 2) return [];
  if (isValid(s)) return [s];

  const visited: { [key: string]: boolean } = {};
  const result: string[] = [];
  const options: string[] = [s];

  while (options.length > 0) {
    const option: string | undefined = options.shift();
    if (!option) continue;
    if (option.length < 2) continue;

    if (
          result.length > 0 // a result was found
      &&  result[0].length > (option.length - 1) // the following posible results are smaller
    ) return result;

    for (let i = 0; i < s.length; i = i + 1) {
      const char = option.charAt(i);
      if (['(', ')'].indexOf(char) < 0) continue;

      const tmp = removeCharAt(option, i);
      if (_.has(visited, tmp)) continue;
      visited[tmp] = true;
      options.push(tmp);

      if (isValid(tmp)) {
        result.push(tmp);
      }
    }
  }

  return result;
};

export {
  removeParenthesis,
};
