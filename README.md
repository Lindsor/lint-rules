# Lint Rules #

## Package Info: ##
- Name: `@lindsor/lint-rules`
- Version: `0.0.4`
- License: `MIT`

## Installing: ##
`npm install -D @lindsor/lint-rules`

### Peer Dependencies: ###
Depending on the config file you are using you will need to install peerDependencies
Install with `npm install -D <peerDependency>` if needed.
The full list of potential peerDependencies is:
```json
{
  "codelyzer": "5.x",
  "tslint-eslint-rules": "5.x",
  "stylelint-high-performance-animation": "1.x"
}
```

## Lint Config Files: ##

### stylelint.js ###
```javascript
const tslintRules = require('./tslint').rules;

const maxLineLength = tslintRules['max-line-length'][1];
const indentation = tslintRules['ter-indent'][1];

if (
  typeof maxLineLength !== 'number'
) {
  throw new Error('max-line-length in tslint.json must be a number.');
}

if (
  typeof indentation !== 'number'
) {
  throw new Error('indentation in tslint.json must be a number.');
}

module.exports = exports = {
  plugins: [
    "stylelint-high-performance-animation"
  ],
  rules: {
    "plugin/no-low-performance-animation-properties": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-invalid": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "string-no-newline": true,
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "keyframe-declaration-no-important": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": [
      true,
      {
        "ignore": [
          "custom-elements"
        ]
      }
    ],
    "media-feature-name-no-unknown": true,
    "at-rule-no-unknown": true,
    "comment-no-empty": true,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "function-url-no-scheme-relative": true,
    "function-url-scheme-blacklist": [
      "http"
    ],
    "shorthand-property-no-redundant-values": true,
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "selector-max-compound-selectors": 2,
    "selector-max-empty-lines": 1,
    "selector-max-universal": 0,
    "selector-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,
    "max-nesting-depth": 1,
    "no-unknown-animations": true,
    "font-family-name-quotes": "always-where-recommended",
    "function-comma-newline-after": "never-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    "string-quotes": "single",
    "length-zero-no-unit": true,
    "unit-case": "lower",
    "value-keyword-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 1,
    "property-case": "lower",
    "declaration-bang-space-after": "never",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-trailing-semicolon": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "never-single-line",
    "block-opening-brace-space-before": "always",
    "block-opening-brace-space-after": "always-single-line",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",
    "selector-list-comma-space-before": "never",
    "rule-empty-line-before": [
      "always",
      {
        except: "after-single-line-comment"
      }
    ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "at-rule-name-case": "lower",
    "at-rule-name-newline-after": "always-multi-line",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "comment-whitespace-inside": "always",
    "linebreaks": "unix",
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "unicode-bom": "never",

    /**
     * Shared rules between tslint and stylelent
     *
     * NOTE: Keep deep nesting if tslintRules file changes we want this to break.
     */
    "max-line-length": maxLineLength,
    "indentation": indentation,
  }
}

```

### tslint.angular.json ###
```json
{
  "extends": [
    "./tslint.json"
  ],
  "rulesDirectory": [
    "codelyzer"
  ],
  "rules": {
    "no-output-on-prefix": false,
    "no-inputs-metadata-property": true,
    "no-host-metadata-property": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "use-lifecycle-interface": true,
    "use-pipe-transform-interface": true,
    "component-class-suffix": [
      true,
      "Page",
      "Component"
    ],
    "directive-class-suffix": true,
    "directive-selector": [
      true,
      "attribute",
      null,
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "app",
      "page",
      "kebab-case"
    ]
  }
}

```

### tslint.json ###
```json
{
  "extends": [
    "tslint:recommended",
    "tslint-eslint-rules"
  ],
  "rules": {
    "no-eval": true,
    "no-duplicate-variable": true,
    "ter-indent": [
      true,
      2,
      {
        "SwitchCase": 1,
        "FunctionDeclaration": {
          "parameters": 1
        },
        "FunctionExpression": {
          "parameters": 1
        }
      }
    ],
    "import-spacing": true,
    "object-curly-spacing": [
      true,
      "always"
    ],
    "class-name": true,
    "curly": true,
    "array-bracket-spacing": [
      true,
      "never"
    ],
    "array-type": false,
    "arrow-parens": false,
    "deprecation": {
      "severity": "warn"
    },
    "no-string-literal": false,
    "import-blacklist": [
      true,
      "rxjs/Rx",
      "lodash"
    ],
    "no-internal-module": true,
    "no-trailing-whitespace": true,
    "no-var-keyword": true,
    "interface-name": false,
    "max-classes-per-file": false,
    "max-line-length": [
      true,
      100
    ],
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": "fields-first"
      }
    ],
    "no-consecutive-blank-lines": false,
    "ban": [
      true,
      "alert"
    ],
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "one-line": [
      true,
      "check-open-brace",
      "check-whitespace"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always"
    ],
    "space-within-parens": true,
    "triple-equals": true,
    "variable-name": [
      true,
      "ban-keywords"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-separator",
      "check-type",
      "check-typecast",
      "check-module",
      "check-preblock"
    ],
    "ban-comma-operator": true,
    "no-duplicate-switch-case": true,
    "no-implicit-dependencies": [
      true,
      "dev",
      "optional"
    ],
    "no-empty-interface": false,
    "no-empty": false,
    "no-inferrable-types": false,
    "no-non-null-assertion": true,
    "no-redundant-jsdoc": true,
    "no-switch-case-fall-through": true,
    "no-use-before-declare": true,
    "no-var-requires": false,
    "object-literal-key-quotes": [
      true,
      "as-needed"
    ],
    "object-literal-sort-keys": false,
    "ordered-imports": false,
    "quotemark": [
      true,
      "single",
      "avoid-escape"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-unused-expression": true,
    "trailing-comma": [
      true,
      {
        "multiline": "always",
        "singleline": "never"
      }
    ],
    "one-variable-per-declaration": false,
    "align": [
      true,
      "parameters",
      "statements",
      "members",
      "elements"
    ]
  }
}

```
