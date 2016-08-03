'use strict';

module.exports = {
  rules: {
    // Require a single space or disallow whitespace after the colon in media features.
    'media-feature-colon-space-after': 'always',

    // Require a single space or disallow whitespace before the colon in media features.
    'media-feature-colon-space-before': 'never',

    // Specify lowercase or uppercase for media feature names.
    'media-feature-name-case': 'lower',

    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': null,

    // Disallow missing punctuation for non-boolean media features.
    'media-feature-no-missing-punctuation': true,

    // Require a single space or disallow whitespace on the inside of the parentheses within media features.
    'media-feature-parentheses-space-inside': 'never',

    // Require a single space or disallow whitespace after the range operator in media features.
    'media-feature-range-operator-space-after': 'always',

    // Require a single space or disallow whitespace before the range operator in media features.
    'media-feature-range-operator-space-before': 'always',
  }
};
