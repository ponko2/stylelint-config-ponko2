'use strict';

module.exports = {
  rules: {
    // Specify lowercase or uppercase for keywords values.
    'value-keyword-case': 'lower',

    // Require a newline or disallow whitespace after the commas of value lists.
    'value-list-comma-newline-after': 'always-multi-line',

    // Require a newline or disallow whitespace before the commas of value lists.
    'value-list-comma-newline-before': null,

    // Require a single space or disallow whitespace after the commas of value lists.
    'value-list-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of value lists.
    'value-list-comma-space-before': 'never',
  }
};
