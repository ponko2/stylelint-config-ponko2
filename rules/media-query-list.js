'use strict';

module.exports = {
  rules: {
    // Require a newline or disallow whitespace after the commas of media query lists.
    'media-query-list-comma-newline-after': 'always-multi-line',

    // Require a newline or disallow whitespace before the commas of media query lists.
    'media-query-list-comma-newline-before': null,

    // Require a single space or disallow whitespace after the commas of media query lists.
    'media-query-list-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of media query lists.
    'media-query-list-comma-space-before': 'never',
  }
};
