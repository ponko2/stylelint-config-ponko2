module.exports = {
  rules: {
    // String
    "string-quotes": "double",

    // Color
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "color-no-named": true,

    // Number
    "number-leading-zero": "never",
    "number-max-precision": 10,
    "number-no-trailing-zeros": true,
    "number-zero-length-no-unit": true,

    // Function
    "function-blacklist": null,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-newline-before": null,
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "none",
    "function-whitelist": null,
    "function-whitespace-after": "always",

    // Value
    "value-no-vendor-prefix": true,

    // Value list
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": null,
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",

    // Unit
    "unit-blacklist": null,
    "unit-whitelist": null,

    // Property
    "property-blacklist": null,
    "property-no-vendor-prefix": true,
    "property-unit-blacklist": null,
    "property-unit-whitelist": null,
    "property-whitelist": null,

    // Custom property
    "custom-property-no-outside-root": true,
    "custom-property-pattern": null,

    // Declaration
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": null,

    // Declaration block
    "declaration-block-no-single-line": null,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-newline-before": null,
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,

    // Block
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-after": null,
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-newline-before": null,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",

    // Selector
    "selector-class-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?(?:--[a-z][a-z0-9]*(?:-[a-z0-9]+)*){0,2}$",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-id-pattern": "^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z][a-z0-9]*(?:-[a-z0-9]+)*)?(?:--[a-z][a-z0-9]*(?:-[a-z0-9]+)*){0,2}$",
    "selector-no-attribute": null,
    "selector-no-combinator": null,
    "selector-no-id": true,
    "selector-no-type": null,
    "selector-no-universal": null,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "selector-root-no-composition": true,

    // Selector list
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": null,
    "selector-list-comma-space-after": null,
    "selector-list-comma-space-before": "never",

    // Rule
    "rule-nested-empty-line-before": [ "always", { except: ["first-nested"], ignore: ["after-comment"] } ],
    "rule-no-duplicate-properties": true,
    "rule-no-shorthand-property-overrides": true,
    "rule-non-nested-empty-line-before": [ "always-multi-line", { ignore: ["after-comment"] } ],
    "rule-properties-order": null,
    "rule-trailing-semicolon": "always",

    // Root
    "root-no-standard-properties": true,

    // Media feature
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": null,
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    // Custom media
    "custom-media-pattern": null,

    // Media query
    "media-query-parentheses-space-inside": "never",

    // Media query list
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-newline-before": null,
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",

    // At rule
    "at-rule-empty-line-before": [ "always", { except: [ "blockless-group", "first-nested" ], ignore: ["after-comment"] } ],
    "at-rule-no-vendor-prefix": true,

    // Comment
    "comment-empty-line-before": [ "always", { except: ["first-nested"], ignore: ["stylelint-commands"] } ],
    "comment-whitespace-inside": "always",

    // General / Sheet
    "indentation": 2,
    "max-line-length": null,
    "max-empty-lines": 2,
    "no-eol-whitespace": true,
    "no-missing-eof-newline": true,
  },
}
