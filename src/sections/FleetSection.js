import React from "react";

const FleetSection = () => (
  <section id="fleet" className="fleet-section py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Our Range Of Fleet</h2>
      <div className="row g-4 justify-content-center">
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">Saloon Cars</h4>
              <ul className="list-unstyled">
                <li>Climate Control</li>
                <li>Up to 4 passengers & 2 bags</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">Executive Cars</h4>
              <ul className="list-unstyled">
                <li>Climate Control</li>
                <li>Up to 4 passengers & 2 bags</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">Estate Cars</h4>
              <ul className="list-unstyled">
                <li>Climate Control</li>
                <li>Up to 4 passengers & 3 bags</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">MPV’s</h4>
              <ul className="list-unstyled">
                <li>Climate Control</li>
                <li>Up to 6 passengers & 3 small bags</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">8 Seater</h4>
              <ul className="list-unstyled">
                <li>Climate Control</li>
                <li>Up to 8 passengers & 8 bags</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-3">
          <div className="card h-100 shadow-sm text-center">
            <div className="card-body">
              <h4 className="card-title">Minibuses</h4>
              <ul className="list-unstyled">
                <li>Climate Control</li>
                <li>Up to 16 passengers & 8 bags</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FleetSection;
