'use strict';

module.exports = {
  rules: {
    // Require a single space or disallow whitespace after the colon in media features.
    'media-feature-colon-space-after': 'always',

    // Require a single space or disallow whitespace before the colon in media features.
    'media-feature-colon-space-before': 'never',

    // Disallow vendor prefixes for media feature names.
    'media-feature-name-no-vendor-prefix': null,

    // Ensure that non-boolean media features have the punctuation they need: either a colon or a range-operator.
    'media-feature-no-missing-punctuation': true,

    // Require a single space or disallow whitespace after the range operator in media features.
    'media-feature-range-operator-space-after': 'always',

    // Require a single space or disallow whitespace before the range operator in media features.
    'media-feature-range-operator-space-before': 'always',
  }
};
