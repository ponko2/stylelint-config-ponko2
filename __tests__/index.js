import fs        from 'fs';
import config    from '../';
import stylelint from 'stylelint';
import test      from 'ava';

const validScss = fs.readFileSync('./__tests__/valid.scss', 'utf-8');
const invalidScss = fs.readFileSync('./__tests__/invalid.scss', 'utf-8');

test('no warnings with valid css', t =>
  stylelint.lint({
    code: validScss,
    config,
    syntax: 'scss'
  }).then(({errored, results}) => {
    const {deprecations, invalidOptionWarnings, warnings} = results[0];
    t.falsy(errored, 'no errored');
    t.is(deprecations.length, 0, 'no deprecations');
    t.is(invalidOptionWarnings.length, 0, 'no invalid option warnings');
    t.is(warnings.length, 0, 'flags no warnings');
  })
);

test('a warning with invalid css', t =>
  stylelint.lint({
    code: invalidScss,
    config,
    syntax: 'scss'
  }).then(({errored, results}) => {
    const {deprecations, invalidOptionWarnings, warnings} = results[0];
    t.truthy(errored, 'errored');
    t.is(deprecations.length, 0, 'no deprecations');
    t.is(invalidOptionWarnings.length, 0, 'no invalid option warnings');
    t.is(warnings.length, 1, 'flags one warning');
    t.is(warnings[0].text, 'Unexpected leading zero (number-leading-zero)', 'correct warning text');
  })
);
