'use strict';

module.exports = {
  rules: {
    // Specify indentation.
    'indentation': 2,

    // Limit the number of adjacent empty lines.
    'max-empty-lines': 2,

    // Limit the length of a line.
    'max-line-length': null,

    // Limit the depth of nesting.
    'max-nesting-depth': [6, {
      severity: 'warning',
      ignore: ['blockless-at-rules'],
    }],

    // Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
    'no-descending-specificity': true,

    // Disallow duplicate selectors.
    'no-duplicate-selectors': true,

    // Disallow empty sources.
    'no-empty-source': true,

    // Disallow end-of-line whitespace.
    'no-eol-whitespace': true,

    // Disallow extra semicolons.
    'no-extra-semicolons': true,

    // Disallow double-slash comments (//...) which are not supported by CSS.
    'no-invalid-double-slash-comments': true,

    // Disallow missing end-of-source newlines.
    'no-missing-end-of-source-newline': true,

    // Disallow unknown animations.
    'no-unknown-animations': true,
  }
};
