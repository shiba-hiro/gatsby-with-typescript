module.exports = {
  "extends": [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  "plugins": [
    "@typescript-eslint",
    "react",
  ],
  "env": {
    "node": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
  },
  "globals": {
    "__DEV__": false,
    "localStorage": true,
    "fetch": true,
    "window": true,
    "document": true,
    "navigator": true,
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true,
    },
  },
  "rules": {
    "import/extensions": [
      0
    ],
    "camelcase": [0],
    "no-underscore-dangle": 0,
    "global-require": 0,
    "no-use-before-define": 0,
    "import/prefer-default-export": [0],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-mixed-operators": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "max-len": "off",
    "react/jsx-filename-extension": "off",
  },
  "overrides": [
    { // No need to declare return type for describe, it, etc...
      "files": ["*.spec.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            "allowExpressions": true,
          }
        ],
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".ts",
        ],
      },
    },
  },
}