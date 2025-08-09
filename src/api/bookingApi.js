// bookingApi.js
// Handles booking-related API calls

export async function createBooking(form) {
  // Convert passengers and bags to integers for backend compatibility
  const bookingPayload = {
    ...form,
    passengers: form.passengers ? parseInt(form.passengers, 10) : null,
    bags: form.bags ? parseInt(form.bags, 10) : null,
  };
  const res = await fetch('http://localhost:8080/api/bookings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingPayload),
  });
  if (!res.ok) throw new Error('Failed to create booking');
  return res.json();
}

export async function listBookings() {
  const res = await fetch('http://localhost:8080/api');
  if (!res.ok) throw new Error('Failed to fetch bookings');
  return res.json();
}
