'use strict';

module.exports = {
  extends: [
    'stylelint-config-ponko2/rules/color',
    'stylelint-config-ponko2/rules/font-family',
    'stylelint-config-ponko2/rules/font-weight',
    'stylelint-config-ponko2/rules/function',
    'stylelint-config-ponko2/rules/number',
    'stylelint-config-ponko2/rules/string',
    'stylelint-config-ponko2/rules/length',
    'stylelint-config-ponko2/rules/time',
    'stylelint-config-ponko2/rules/unit',
    'stylelint-config-ponko2/rules/value',
    'stylelint-config-ponko2/rules/value-list',
    'stylelint-config-ponko2/rules/custom-property',
    'stylelint-config-ponko2/rules/shorthand-property',
    'stylelint-config-ponko2/rules/property',
    'stylelint-config-ponko2/rules/keyframe-declaration',
    'stylelint-config-ponko2/rules/declaration',
    'stylelint-config-ponko2/rules/declaration-block',
    'stylelint-config-ponko2/rules/block',
    'stylelint-config-ponko2/rules/root-rule',
    'stylelint-config-ponko2/rules/selector',
    'stylelint-config-ponko2/rules/selector-list',
    'stylelint-config-ponko2/rules/rule',
    'stylelint-config-ponko2/rules/media-feature',
    'stylelint-config-ponko2/rules/custom-media',
    'stylelint-config-ponko2/rules/media-query-list',
    'stylelint-config-ponko2/rules/at-rule',
    'stylelint-config-ponko2/rules/stylelint-disable-comment',
    'stylelint-config-ponko2/rules/comment',
    'stylelint-config-ponko2/rules/general',
  ].map(require.resolve),
  rules: {}
};
