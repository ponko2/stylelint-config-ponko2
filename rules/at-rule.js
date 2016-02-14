'use strict';

module.exports = {
  rules: {
    // Require or disallow an empty line before @rules.
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-group', 'first-nested'],
      ignore: ['after-comment'],
    }],

    // Disallow vendor prefixes for @rules.
    'at-rule-no-vendor-prefix': true,
  }
};
