'use strict';

module.exports = {
  extends: [
    './rules/color',
    './rules/font-family',
    './rules/font-weight',
    './rules/function',
    './rules/number',
    './rules/string',
    './rules/length',
    './rules/time',
    './rules/unit',
    './rules/value',
    './rules/value-list',
    './rules/custom-property',
    './rules/shorthand-property',
    './rules/property',
    './rules/keyframe-declaration',
    './rules/declaration',
    './rules/declaration-block',
    './rules/block',
    './rules/selector',
    './rules/selector-list',
    './rules/rule',
    './rules/media-feature',
    './rules/custom-media',
    './rules/media-query-list',
    './rules/at-rule',
    './rules/comment',
    './rules/general'
  ].map(require.resolve),
  rules: {}
};
