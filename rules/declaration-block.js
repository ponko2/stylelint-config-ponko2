'use strict';

module.exports = {
  rules: {
    // Disallow single-line declaration blocks.
    'declaration-block-no-single-line': null,

    // Require a newline or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-newline-after': 'always-multi-line',

    // Require a newline or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-semicolon-newline-before': null,

    // Require a single space or disallow whitespace after the semicolons of declaration blocks.
    'declaration-block-semicolon-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the semicolons of declaration blocks.
    'declaration-block-semicolon-space-before': 'never',

    // Limit the number of declaration within single line declaration blocks.
    'declaration-block-single-line-max-declarations': 1,
  }
};
