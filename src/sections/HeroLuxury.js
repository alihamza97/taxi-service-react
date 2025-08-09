import React, { useState } from 'react';

const HeroLuxury = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    date: '',
    time: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Search submitted! (Demo only)');
  };

  return (
    <section
      className="luxury-hero-section d-flex align-items-center justify-content-center"
      style={{
        minHeight: '90vh',
  background: `linear-gradient(120deg, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
        color: '#fff',
        position: 'relative',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      }}
    >
      <div className="container text-center">
        <h1 className="display-3 fw-bold mb-3" style={{letterSpacing: '2px', textShadow: '0 2px 16px #000'}}>The global chauffeur service</h1>
        <p className="lead mb-4" style={{fontWeight: 400, textShadow: '0 1px 8px #000'}}>Effortless travel at your fingertips. Book, track and manage your journey easily.</p>
        <form
          onSubmit={handleSubmit}
          className="row g-3 justify-content-center bg-white bg-opacity-75 rounded-5 p-4 mx-auto shadow-lg"
          style={{ maxWidth: 800, backdropFilter: 'blur(6px)' }}
        >
          <div className="col-md-5">
            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="From (Address, airport, hotel, ...)"
              required
              style={{borderRadius: '1rem'}}
            />
          </div>
          <div className="col-md-5">
            <input
              name="to"
              value={form.to}
              onChange={handleChange}
              className="form-control form-control-lg border-0 shadow-sm"
              placeholder="To (Address, airport, hotel, ...)"
              required
              style={{borderRadius: '1rem'}}
            />
          </div>
          <div className="col-md-3">
            <input
              name="date"
              value={form.date}
              onChange={handleChange}
              className="form-control form-control-lg border-0 shadow-sm"
              type="date"
              required
              style={{borderRadius: '1rem'}}
            />
          </div>
          <div className="col-md-3">
            <input
              name="time"
              value={form.time}
              onChange={handleChange}
              className="form-control form-control-lg border-0 shadow-sm"
              type="time"
              required
              style={{borderRadius: '1rem'}}
            />
          </div>
          <div className="col-12 mt-2">
            <button type="submit" className="btn btn-dark btn-lg w-100 shadow rounded-pill" style={{fontSize: '1.3rem', letterSpacing: '1px'}}>Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroLuxury;
