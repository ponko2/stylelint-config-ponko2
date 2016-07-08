'use strict';

module.exports = {
  rules: {
    // Specify a blacklist of disallowed functions.
    'function-blacklist': null,

    // Disallow an unspaced operator within calc functions.
    'function-calc-no-unspaced-operator': true,

    // Require a newline or disallow whitespace after the commas of functions.
    'function-comma-newline-after': 'always-multi-line',

    // Require a newline or disallow whitespace before the commas of functions.
    'function-comma-newline-before': null,

    // Require a single space or disallow whitespace after the commas of functions.
    'function-comma-space-after': 'always-single-line',

    // Require a single space or disallow whitespace before the commas of functions.
    'function-comma-space-before': 'never',

    // Disallow direction values in linear-gradient() calls that are not valid according to the standard syntax.
    'function-linear-gradient-no-nonstandard-direction': true,

    // Limit the number of adjacent empty lines within functions.
    'function-max-empty-lines': 0,

    // Specify lowercase or uppercase for function names.
    'function-name-case': 'lower',

    // Require a newline or disallow whitespace on the inside of the parentheses of functions.
    'function-parentheses-newline-inside': 'always-multi-line',

    // Require a single space or disallow whitespace on the inside of the parentheses of functions.
    'function-parentheses-space-inside': 'never-single-line',

    // Require or disallow data URIs for urls.
    'function-url-data-uris': null,

    // Disallow scheme-relative urls.
    'function-url-no-scheme-relative': null,

    // Require or disallow quotes for urls.
    'function-url-quotes': 'never',

    // Specify a whitelist of allowed functions.
    'function-whitelist': null,

    // Require or disallow whitespace after functions.
    'function-whitespace-after': 'always',
  }
};
