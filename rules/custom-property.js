'use strict';

module.exports = {
  rules: {
    // Require or disallow an empty line before custom properties.
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested'],
        ignore: ['after-comment', 'inside-single-line-block']
      }
    ],

    // Specify a pattern for custom properties.
    'custom-property-pattern': null
  }
};
