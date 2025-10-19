module.exports = {
    extends: ['react-app', 'react-app/jest', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        "jsx-a11y/anchor-is-valid": "off",
        'max-len': [
            'warn',
            {
                code: 360,
            },
        ],
        'max-lines': [
            'warn',
            {
                max: 480,
                skipComments: true,
            },
        ],
    },
}
