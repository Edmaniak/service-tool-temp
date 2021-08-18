module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:nuxt/recommended'
    ],
    'plugins': ['unused-imports'],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': ['error', 'always'],
        'space-before-blocks': ['error', 'always'],
        '@typescript-eslint/ban-ts-ignore': 'off',
        'keyword-spacing': ['error', {'after': true}],
        'quotes': ['error', 'single'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/camelcase': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@intlify/vue-i18n/no-unused-keys': 'off'
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
}
