module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable the unescaped entities rule
    'react/no-unescaped-entities': 'off',
    
    // You can set this to 'warn' instead of 'off' to still see warnings but not errors
    'react-hooks/exhaustive-deps': 'off'
  }
}