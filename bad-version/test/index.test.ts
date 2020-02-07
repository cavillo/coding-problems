import * as _ from 'lodash';
import { expect } from 'chai';
import 'mocha';

import { findFirstBadVersion } from '../src';

const buildMap = (n: number, v: number) => _.range(n).map((val: number, i: number) => i >= v);

describe('Tests', async () => {
  it('Example #1', async () => {
    const n = 7;
    const v = 4;
    const versionMap = buildMap(n, v);

    const version = findFirstBadVersion(versionMap);
    expect(version).to.equal(v);
  });

  it('Example #2', async () => {
    const n = 8;
    const v = 4;
    const versionMap = buildMap(n, v);

    const version = findFirstBadVersion(versionMap);
    expect(version).to.equal(v);
  });

  it('Example #3', async () => {
    const n = 80;
    const v = 22;
    const versionMap = buildMap(n, v);

    const version = findFirstBadVersion(versionMap);
    expect(version).to.equal(v);
  });

});
