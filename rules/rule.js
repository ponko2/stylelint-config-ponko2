'use strict';

module.exports = {
  rules: {
    // Require or disallow an empty line before nested rules.
    'rule-nested-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],

    // Disallow duplicate properties within rules.
    'rule-no-duplicate-properties': true,

    // Disallow shorthand properties that override related longhand properties.
    'rule-no-shorthand-property-overrides': true,

    // Require or disallow an empty line before non-nested rules.
    'rule-non-nested-empty-line-before': ['always-multi-line', {
      ignore: ['after-comment'],
    }],

    // Specify the order of properties within rules.
    'rule-properties-order': null,

    // Require or disallow a trailing semicolon within rules.
    'rule-trailing-semicolon': 'always',
  }
};
