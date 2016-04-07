'use strict';

module.exports = {
  rules: {
    // Disallow duplicate properties within declaration blocks.
    'declaration-block-no-duplicate-properties': true,

    // Disallow property values that are ignored due to another property value in the same rule.
    'declaration-block-no-ignored-properties': true,

    // Disallow shorthand properties that override related longhand properties within declaration blocks.
    'declaration-block-no-shorthand-property-overrides': true,

    // Specify the order of properties within declaration blocks.
    'declaration-block-properties-order': null,

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

    // Require or disallow a trailing semicolon within declaration blocks.
    'declaration-block-trailing-semicolon': 'always',
  }
};
