import React from "react";

const HowItWorks = () => (
  <section id="how-it-works" className="how-it-works-section py-5 bg-white">
    <div className="container">
      <h2 className="text-center mb-4">How Taxi Service Works</h2>
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">Plan Your Trip</h4>
              <p className="card-text">
                Fill in your journey details like pick up, drop off, date and
                time.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">Get a Quote</h4>
              <p className="card-text">
                Instant quote with an effortless booking process with simple
                steps.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">Enjoy Journey</h4>
              <p className="card-text">
                We’ll confirm your journey via email and keep you updated.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
