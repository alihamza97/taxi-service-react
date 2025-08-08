import React from 'react';

const ServicesSection = () => (
  <section id="services" className="services-section py-5">
    <div className="container">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Taxi Services</h4>
              <p className="card-text">Local 24hr Taxi & Minicab company for all journeys & airports.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Minibus Hire</h4>
              <p className="card-text">9, 12, 14, 16, and 24 seat minibuses for all travel requirements.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Airport Taxi</h4>
              <p className="card-text">Best taxi for airport transfers to and from your location.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Account Service</h4>
              <p className="card-text">Business customers can take advantage of our account facilities.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Executive Taxis</h4>
              <p className="card-text">Luxurious and classy executive taxi service for your comfort.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h4 className="card-title">Courier Services</h4>
              <p className="card-text">Send your parcel anywhere in the UK with same-day or next-day delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
