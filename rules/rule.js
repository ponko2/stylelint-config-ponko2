'use strict';

module.exports = {
  rules: {
    // Require or disallow an empty line before rules.
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ]
  }
};
