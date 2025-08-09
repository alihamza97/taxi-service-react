import React from "react";

const HeroSection = () => (
  <section id="hero" className="hero-section bg-primary text-white py-5">
    <div className="container text-center">
      <h1 className="display-3 fw-bold mb-3">Taxi Service</h1>
      <p className="lead mb-4">
        Your local 24hr Taxi & Minicab company for local journeys & airports.
        Trusted, always available, and competitively priced.
      </p>
      <a href="#get-quote" className="btn btn-light btn-lg shadow">
        Get A Quote
      </a>
    </div>
  </section>
);

export default HeroSection;
