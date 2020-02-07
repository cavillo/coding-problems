import { expect } from 'chai';
import 'mocha';

import { removeParenthesis } from '../src';

describe('Tests', async () => {
  it('Caase "()())()"', async () => {
    const s = '()())()';
    const result: string[] = removeParenthesis(s);
    const expected: string[] = ['(())()', '()()()'];

    expect(expected.length).to.equal(result.length);
    expect(expected.join(';')).to.equal(result.join(';'));
  });

  it('Caase "(a)())()"', async () => {
    const s = '(a)())()';
    const result: string[] = removeParenthesis(s);
    const expected: string[] = ['(a())()', '(a)()()'];

    expect(expected.length).to.equal(result.length);
    expect(expected.join(';')).to.equal(result.join(';'));
  });

  it('Caase ")("', async () => {
    const s = ')(';
    const result: string[] = removeParenthesis(s);
    const expected: string[] = [];

    expect(expected.length).to.equal(result.length);
    expect(expected.join(';')).to.equal(result.join(';'));
  });

  it('Caase "(()))("', async () => {
    const s = '(()))(';
    const result: string[] = removeParenthesis(s);
    const expected: string[] = ['(())'];

    expect(expected.length).to.equal(result.length);
    expect(expected.join(';')).to.equal(result.join(';'));
  });

  it('Caase ""', async () => {
    const s = '';
    const result: string[] = removeParenthesis(s);
    const expected: string[] = [];

    expect(expected.length).to.equal(result.length);
    expect(expected.join(';')).to.equal(result.join(';'));
  });
});
