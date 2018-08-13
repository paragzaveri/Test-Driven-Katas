const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty srting was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Counts spaces as characters,', () => {
    // const word1 = 'Parag Is Awesome!';
    // const word2 = 'Kevin Is Awesome!';
    // expect(wrap(word1)).should.have.length(17);
    expect(wrap('          qwertyuiop', 10)).to.equal('         \nqwertyuiop');
  });
  it('Does not break up a word', () => {
    expect(wrap('Kevin is the real Iceman', 10)).to.equal(
      'Kevin is\nthe real\nIceman'
    );
  });
  it('Returns a string broken into 4 parts of 20 chars', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.'
    );
  });
  // it('Throws an error if word is longer than the max length', () => {
});
// }

//counts spaces as characters
//doesn't break up a word
//throws error if there's a word longer than maxlen
