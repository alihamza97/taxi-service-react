import React, { useState } from 'react';

const GetAQuoteSection = () => {
  const [form, setForm] = useState({
    pickup: '',
    dropoff: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    car: '',
    passengers: '',
    bags: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Quote request submitted! (Demo only)');
  };

  return (
    <section id="get-quote" className="get-quote-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Get A Quote</h2>
        <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
          <div className="col-md-6">
            <input name="pickup" value={form.pickup} onChange={handleChange} className="form-control mb-2" placeholder="Pick-Up Address *" required />
            <input name="dropoff" value={form.dropoff} onChange={handleChange} className="form-control mb-2" placeholder="Drop-Off Address *" required />
            <input name="name" value={form.name} onChange={handleChange} className="form-control mb-2" placeholder="Your Name *" required />
            <input name="email" value={form.email} onChange={handleChange} className="form-control mb-2" placeholder="Your Email address *" type="email" required />
            <input name="phone" value={form.phone} onChange={handleChange} className="form-control mb-2" placeholder="Your Phone Number *" required />
            <input name="date" value={form.date} onChange={handleChange} className="form-control mb-2" placeholder="Date *" type="date" required />
            <input name="time" value={form.time} onChange={handleChange} className="form-control mb-2" placeholder="Time of Travel *" type="time" required />
            <input name="car" value={form.car} onChange={handleChange} className="form-control mb-2" placeholder="Choose A Car *" required />
            <input name="passengers" value={form.passengers} onChange={handleChange} className="form-control mb-2" placeholder="Passengers" />
            <input name="bags" value={form.bags} onChange={handleChange} className="form-control mb-2" placeholder="Bags" />
            <button type="submit" className="btn btn-primary w-100 mt-2">Request A Quote</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetAQuoteSection;
