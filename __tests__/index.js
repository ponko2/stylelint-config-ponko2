const fs = require('fs');
const config = require('../');
const stylelint = require('stylelint');

const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');
const invalidScss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');

describe('no warnings with valid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validScss,
      config,
      syntax: 'scss'
    });
  });

  it('no errored', () =>
    result.then((data) => {
      expect(data.errored).toBeFalsy();
    }));

  it('no deprecations', () =>
    result.then((data) => {
      expect(data.results[0].deprecations.length).toBe(0);
    }));

  it('no invalid option warnings', () =>
    result.then((data) => {
      expect(data.results[0].invalidOptionWarnings.length).toBe(0);
    }));

  it('flags no warnings', () =>
    result.then((data) => {
      expect(data.results[0].warnings.length).toBe(0);
    }));
});

describe('a warning with invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidScss,
      config,
      syntax: 'scss'
    });
  });

  it('errored', () =>
    result.then((data) => {
      expect(data.errored).toBeTruthy();
    }));

  it('no deprecations', () =>
    result.then((data) => {
      expect(data.results[0].deprecations.length).toBe(0);
    }));

  it('no invalid option warnings', () =>
    result.then((data) => {
      expect(data.results[0].invalidOptionWarnings.length).toBe(0);
    }));

  it('flags one warning', () =>
    result.then((data) => {
      expect(data.results[0].warnings.length).toBe(1);
    }));

  it('correct warning text', () =>
    result.then((data) => {
      expect(data.results[0].warnings[0].text).toBe(
        'Unexpected leading zero (number-leading-zero)'
      );
    }));
});
