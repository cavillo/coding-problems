import { expect } from 'chai';
import 'mocha';

import { WordSearch } from '../src';

// TODO
describe('Tests', async () => {
  it('Basic case', async () => {
    const searcher = new WordSearch();
    searcher.addWord('bad');
    searcher.addWord('dad');
    searcher.addWord('mad');

    expect(searcher.search('pad')).to.equal(false);
    expect(searcher.search('bad')).to.equal(true);
    expect(searcher.search('.ad')).to.equal(true);
    expect(searcher.search('b..')).to.equal(true);
  });
});
