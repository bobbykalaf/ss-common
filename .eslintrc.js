module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:flowtype/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
		'prettier/react',
		'prettier/flowtype'
	],
	parserOptions: {
		sourceType: 'module'
	},
	parser: 'babel-eslint',
	plugins: [ 'react', 'prettier', 'flowtype', 'import', 'jsx-a11y' ],
	rules: {
		'linebreak-style': [ 'error', 'windows' ],
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		'no-multiple-empty-lines': [ 2, { max: 1 } ],
		'getter-return': [ 2 ],
		'no-extra-parens': [ 'error' ],
		'no-template-curly-in-string': [ 'error' ],
		'accessor-pairs': [ 'error', { 'setWithoutGet': true } ],
		'array-callback-return': [ 2 ],
		'class-methods-use-this': [ 'error' ],
		'consistent-return': [ 2, { 'treatUndefinedAsUnspecified': false } ],
		'curly': [ 2, 'all' ],
		'dot-location': [ 'error', 'object' ],
		'dot-notation': [ 'error' ],
		'eqeqeq': [ 'error', 'smart' ],
		'no-alert': [ 'error' ],
		'no-caller': [ 'error' ],
		'no-case-declarations': [ 'error' ],
		'no-else-return': [ 'error', { 'allowElseIf': true } ],
		'no-empty-function': [ 'error' ],
		'no-empty-pattern': ['error'],
		'no-eval': [ 'error' ],
		'no-eq-null': [ 'error' ],
		'no-extra-bind': [ 'error' ],
		'no-fallthrough': [ 'error' ],
		'no-implicit-coercion': [ 'error' ],
		'no-implicit-globals': ['error'],
		'no-implied-eval': [ 'error' ],
		'no-invalid-this': [ 2 ],
		'no-iterator': [ 2 ],
		'no-labels': [ 2 ],
		'no-magic-numbers': [ 2],
		'no-multi-spaces': [ 2 ] ,
		'no-new': [ 2 ],
		'no-new-func': [ 2],
		'no-new-wrappers': [ 2],
		'no-param-reassign': [ 2 ],
		'no-self-compare': [ 2],
		'no-unused-expressions': [2],
		'no-useless-return': [ 2],
		'no-useless-concat': [ 2], 
		'no-useless-call': [ 2], 
		'prefer-promise-reject-errors': [ 2 ],
		'require-await': [ 2 ],
		'yoda': [ 2],
		'no-catch-shadow': [2],
		'no-shadow': [2],
		'no-use-before-define': [2],
		'handle-callback-err': [2],
		'callback-return': [2],
		'array-bracket-newline': [2, 'always'],
		'array-bracket-spacing': [2, 'always'],
		'array-element-newline': [2, 'always'],
		'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
		'block-spacing': [ 2 ],
		'comma-dangle': [ 2, 'never' ],
		'comma-spacing': [2, { 'after': true, 'before': false  }],
		'comma-style': [ 2, 'first' ],
		'consistent-this': [ 2, 'that' ],
		'func-style': [ 2, 'declaration', { allowArrowFunctions: true }],
		'function-paren-newline': [ 2, 'never' ],
		'implicit-arrow-linebreak': [ 2, 'beside' ],
		'jsx-quotes': [ 2, 'prefer-double' ],
		'indent': [ 2,  4],
		'func-call-spacing': [ 2, 'never' ]
	}
};
