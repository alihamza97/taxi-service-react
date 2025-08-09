// paymentApi.js
// Handles payment intent API calls

export async function createPaymentIntent(amount, bookingId) {
  const res = await fetch('http://localhost:8080/api/payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, bookingId }),
  });
  if (!res.ok) throw new Error('Failed to create payment intent');
  return res.json();
}
