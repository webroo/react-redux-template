module.exports = {
  'extends': 'airbnb',
  'env': {
    // Allow mocha globals like "describe" and "it"
    'mocha': true
  },
  'parserOptions': {
    'ecmaFeatures': {
      // Allow object rest spread eg: {...thing}
      'experimentalObjectRestSpread': true
    }
  },
  // Relax a few rules for personal preference
  'rules': {
    // Allow param props to be set, useful for Array.reduce
    'no-param-reassign': [2, {'props': false}],
    // No curly braces spacing
    'object-curly-spacing': [2, 'never'],
    // Allow parseInt radix param to be omitted
    'radix': [2, 'as-needed'],
    // Allow a little more line length for edge cases and ignore comments
    'max-len': [2, 105, 2, {'ignoreUrls': true, 'ignoreComments': true}],
    // Allow regular string concatenation
    'prefer-template': 0
  }
};
