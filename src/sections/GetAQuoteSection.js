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
    <section id="get-quote" className="get-quote-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Get A Quote</h2>
        <div className="row justify-content-center">
          <div className="col-md-7 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 p-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12 col-md-6">
                  <input name="pickup" value={form.pickup} onChange={handleChange} className="form-control form-control-lg" placeholder="Pick-Up Address *" required />
                </div>
                <div className="col-12 col-md-6">
                  <input name="dropoff" value={form.dropoff} onChange={handleChange} className="form-control form-control-lg" placeholder="Drop-Off Address *" required />
                </div>
                <div className="col-12 col-md-6">
                  <input name="name" value={form.name} onChange={handleChange} className="form-control form-control-lg" placeholder="Your Name *" required />
                </div>
                <div className="col-12 col-md-6">
                  <input name="email" value={form.email} onChange={handleChange} className="form-control form-control-lg" placeholder="Your Email address *" type="email" required />
                </div>
                <div className="col-12 col-md-6">
                  <input name="phone" value={form.phone} onChange={handleChange} className="form-control form-control-lg" placeholder="Your Phone Number *" required />
                </div>
                <div className="col-6 col-md-3">
                  <input name="date" value={form.date} onChange={handleChange} className="form-control form-control-lg" placeholder="Date *" type="date" required />
                </div>
                <div className="col-6 col-md-3">
                  <input name="time" value={form.time} onChange={handleChange} className="form-control form-control-lg" placeholder="Time of Travel *" type="time" required />
                </div>
                <div className="col-12 col-md-6">
                  <input name="car" value={form.car} onChange={handleChange} className="form-control form-control-lg" placeholder="Choose A Car *" required />
                </div>
                <div className="col-6">
                  <input name="passengers" value={form.passengers} onChange={handleChange} className="form-control form-control-lg" placeholder="Passengers" />
                </div>
                <div className="col-6">
                  <input name="bags" value={form.bags} onChange={handleChange} className="form-control form-control-lg" placeholder="Bags" />
                </div>
                <div className="col-12 mt-2">
                  <button type="submit" className="btn btn-warning btn-lg w-100 rounded-pill fw-bold shadow">Request A Quote</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetAQuoteSection;
