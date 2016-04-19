'use strict';

module.exports = {
  rules: {
    // Require or disallow an empty line before at-rules.
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-group', 'first-nested'],
      ignore: ['after-comment'],
    }],

    // Specify lowercase or uppercase for at-rules names.
    'at-rule-name-case': 'lower',

    // Disallow vendor prefixes for at-rules.
    'at-rule-no-vendor-prefix': true,

    // Require a newline after the semicolon of at-rules.
    'at-rule-semicolon-newline-after': 'always',
  }
};
