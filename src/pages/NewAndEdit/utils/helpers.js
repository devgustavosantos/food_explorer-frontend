export function formatPrice(price) {
  const priceWithoutSymbols = price.replace('R$ ', '');

  const priceWithDot = priceWithoutSymbols.replace(',', '.');

  return priceWithDot;
}
