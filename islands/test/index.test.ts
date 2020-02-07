import { expect } from 'chai';
import 'mocha';

import { countIslands } from '../src';

describe('Tests', async () => {
  it('Case 1', async () => {
    const grid = [
      [1, 1, 1, 1, 0],
      [1, 1, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];
    const result = countIslands(grid);

    expect(result).to.equal(1);
  });

  it('Case 2', async () => {
    const grid = [
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1],
    ];
    const result = countIslands(grid);

    expect(result).to.equal(3);
  });
});
