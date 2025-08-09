import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import StripeCardSection from "./StripeCardSection";
import { createBooking } from '../api/bookingApi';
import { createPaymentIntent } from '../api/paymentApi';
const GetAQuoteSection = ({
  car,
  form: tripForm,
  clientSecret: propClientSecret,
}) => {
  const [form, setForm] = useState({
    pickup: tripForm?.from || "",
    dropoff: tripForm?.to || "",
    name: "",
    email: "",
    phone: "",
    date: tripForm?.date || "",
    time: tripForm?.time || "",
    car: car?.name || "",
    passengers: "",
    bags: "",
  });
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [clientSecret, setClientSecret] = useState(propClientSecret || "");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    if (!stripe || !elements) {
      setError("Stripe has not loaded yet.");
      setLoading(false);
      return;
    }
    try {
      // 1. Create booking
        if (!isNaN(priceNum)) amount = Math.round(priceNum * 100);
        // 1. Create booking
        const bookingData = await createBooking(form);
        const bookingId = bookingData.id || bookingData.bookingId || bookingData._id;
        if (!bookingId) throw new Error('No bookingId returned');

        // 2. Create payment intent
        let amount = 1000;
        if (car && car.price) {
          const priceNum = parseFloat(car.price.replace(/[^\d.]/g, ''));
          if (!isNaN(priceNum)) amount = Math.round(priceNum * 100);
        }
        const paymentData = await createPaymentIntent(amount, bookingId);
        const newClientSecret = paymentData.clientSecret;
        if (!newClientSecret) throw new Error('No client secret returned');
        setClientSecret(newClientSecret);
      if (!newClientSecret) throw new Error("No client secret returned");
      setClientSecret(newClientSecret);

      // 3. Confirm payment
      const cardElement = elements.getElement("card");
      const { error: stripeError } = await stripe.confirmCardPayment(
        newClientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: { name: form.name, email: form.email },
          },
        },
      );
      if (stripeError) {
        setError(stripeError.message);
        setLoading(false);
        return;
      }
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Payment failed.");
    }
    setLoading(false);
  };

  return (
    <section id="get-quote" className="get-quote-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Booking</h2>
        {car && (
          <div className="mb-4 text-center">
            <img
              src={car.image}
              alt={car.name}
              style={{ height: 100, borderRadius: 12, objectFit: "cover" }}
            />
            <h4 className="mt-2">{car.name}</h4>
            <p className="mb-0">
              Seats: {car.seats} | Price: {car.price}
            </p>
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 p-4">
              {success ? (
                <div className="alert alert-success text-center">
                  Payment successful! Your booking is confirmed.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-12 col-md-6">
                    <input
                      name="pickup"
                      value={form.pickup}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Pick-Up Address *"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      name="dropoff"
                      value={form.dropoff}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Drop-Off Address *"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Your Email address *"
                      type="email"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Your Phone Number *"
                      required
                    />
                  </div>
                  <div className="col-6 col-md-3">
                    <input
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Date *"
                      type="date"
                      required
                    />
                  </div>
                  <div className="col-6 col-md-3">
                    <input
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Time of Travel *"
                      type="time"
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      name="car"
                      value={form.car}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Choose A Car *"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      name="passengers"
                      value={form.passengers}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Passengers"
                    />
                  </div>
                  <div className="col-6">
                    <input
                      name="bags"
                      value={form.bags}
                      onChange={handleChange}
                      className="form-control form-control-lg"
                      placeholder="Bags"
                    />
                  </div>
                  <div className="col-12">
                    <hr />
                    <h5 className="mb-3">Payment Details</h5>
                    <StripeCardSection />
                  </div>
                  {error && (
                    <div className="col-12">
                      <div className="alert alert-danger">{error}</div>
                    </div>
                  )}
                  <div className="col-12 mt-2">
                    <button
                      type="submit"
                      className="btn btn-success btn-lg w-100 rounded-pill fw-bold shadow"
                      disabled={loading || !stripe || !elements}
                    >
                      {loading ? "Processing..." : "Pay & Book Now"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuoteSection;
