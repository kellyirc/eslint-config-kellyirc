module.exports = {
    "rules": {
        "no-extra-parens": [2, "functions"],
        "dot-location": [2, "property"],
        "no-else-return": 2,
        "no-self-compare": 2,
        "no-throw-literal": 2,
        "no-void": 2,
        "wrap-iife": [2, "inside"],

        "strict": [2, "never"],

        "array-bracket-spacing": [2, "never"],
        "brace-style": [2, "stroustrup", { "allowSingleLine": true }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "indent": [2, 4, {"SwitchCase": 1}],
        "no-lonely-if": 2,
        "no-multiple-empty-lines": [2, {"max": 3}],
        "no-nested-ternary": 2,
        "no-spaced-func": 2,
        "no-undef": 2,
        "no-unneeded-ternary": 2,
        "object-curly-spacing": [2, "always"],
        "quote-props": [2, "as-needed"],
        "quotes": [2, "single", "avoid-escape"],
        "semi": [2, "always"],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "never"],
        "space-in-parens": [2, "never"],
        "spaced-comment": [2, "always"]

/*
    Recommended es6 rules.
        "constructor-super": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "object-shorthand": [2, "always"],
        "prefer-const": 2
 */

    }
};
