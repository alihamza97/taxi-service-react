// utils/format.js
// Utility functions for formatting

export function formatPriceGBP(pence) {
  return `£${(pence / 100).toFixed(2)}`;
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB');
}
