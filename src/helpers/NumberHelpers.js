const toCurrency = (n, curr = 'USD', LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);

export { toCurrency };