// import * as _ from 'lodash';

export const countIslands = (grid: number[][]) => {
  let num = 0;

  const visited: { [key: string]: boolean } = {};

  const explore = (i: number, j: number): number => {
    if (i < 0) return 0;
    if (i >= grid.length) return 0;
    if (j < 0) return 0;
    if (j >= grid[0].length) return 0;
    if (visited[`${i}:${j}`]) return 0;
    if (grid[i][j] === 0) return 0;

    visited[`${i}:${j}`] = true;
    explore(i - 1, j);
    explore(i + 1, j);
    explore(i, j - 1);
    explore(i, j + 1);
    return 1 + explore(i - 1, j) + explore(i + 1, j) + explore(i, j - 1) + explore(i, j + 1);
  };

  for (let i = 0; i < grid.length; i = i + 1) {
    for (let j = 0; j < grid.length; j = j + 1) {
      const element = grid[i][j];
      if (element === 1 && !visited[`${i}:${j}`]) {
        if (explore(i, j) > 0) num = num + 1;
      }
    }
  }
  return num;
};
