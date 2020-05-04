module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier"],
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": ["error"],
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  },
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  }
};
