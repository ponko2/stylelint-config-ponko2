'use strict';

module.exports = {
  rules: {
    // Require or disallow an empty line before custom properties.
    'custom-property-empty-line-before': ['always', {
      except: ['after-custom-property', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    }],

    // Disallow custom properties outside of :root rules.
    'custom-property-no-outside-root': true,

    // Specify a pattern for custom properties.
    'custom-property-pattern': null,
  }
};
