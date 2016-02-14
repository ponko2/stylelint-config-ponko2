'use strict';

module.exports = {
  rules: {
    // Specify a pattern for class selectors.
    'selector-class-pattern': (
      '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*' +
      '(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?' +
      '(?:--[a-z][a-z0-9]*(?:-[a-z0-9]+)*){0,2}$'
    ),

    // Require a single space or disallow whitespace after the combinators of selectors.
    'selector-combinator-space-after': 'always',

    // Require a single space or disallow whitespace before the combinators of selectors.
    'selector-combinator-space-before': 'always',

    // Specify a pattern for id selectors.
    'selector-id-pattern': (
      '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*' +
      '(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?' +
      '(?:--[a-z][a-z0-9]*(?:-[a-z0-9]+)*){0,2}$'
    ),

    // Disallow attribute selectors.
    'selector-no-attribute': null,

    // Disallow combinators in selectors.
    'selector-no-combinator': null,

    // Disallow id selectors.
    'selector-no-id': true,

    // Disallow type selectors.
    'selector-no-type': null,

    // Disallow universal selectors.
    'selector-no-universal': null,

    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': true,

    // Specify single or double colon notation for applicable pseudo-elements.
    'selector-pseudo-element-colon-notation': 'double',

    // Disallow the composition of:root selectors.
    'selector-root-no-composition': true,
  }
};
