'use strict';

module.exports = {
  rules: {
    // Specify indentation.
    'indentation': 2,

    // Disallow more than a specified number of adjacent empty lines.
    'max-empty-lines': 2,

    // Limit the length of a line.
    'max-line-length': null,

    // Disallow duplicate selectors.
    'no-duplicate-selectors': true,

    // Disallow end-of-line whitespace.
    'no-eol-whitespace': true,

    // Disallow double-slash comments (//...) which are not supported by CSS.
    'no-invalid-double-slash-comments': true,

    // Disallow missing end-of-file newline.
    'no-missing-eof-newline': true,

    // Disallow animation names that do not correspond to a @keyframes declaration.
    'no-unknown-animations': true,
  }
};
