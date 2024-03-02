module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  plugins: [
    // Add "prettier" here if you have other plugins and want prettier rules to be enforced by eslint
    'prettier'
  ],
  rules: {
    // Other rules...
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'off' // Ensure line endings are handled automatically
        // You can add more Prettier options here as needed
      }
    ]
  }
}
