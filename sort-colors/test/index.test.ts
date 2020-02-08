import * as _ from 'lodash';
import { expect } from 'chai';
import 'mocha';

import { sortColors, sortColors2 } from '../src';

const generateTestCase = () => _.range(_.random(0, 1000)).map(() => _.random(0, 2));

describe('Tests', async () => {
  it('solution 2n', async () => {
    const input    = generateTestCase();
    const expected = input.sort((a, b) => a - b);

    const result = sortColors(input);

    expect(result.join('')).to.be.equal(expected.join(''));
  });

  it('Solution n', async () => {
    const input    = generateTestCase();
    const expected = input.sort((a, b) => a - b);

    const result = sortColors2(input);

    expect(result.join('')).to.be.equal(expected.join(''));
  });
});
