import React from "react";

const TopRoutesSection = () => (
  <section id="top-routes" className="top-routes-section py-5">
    <div className="container">
      <h2 className="text-center mb-4">Top Routes</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul className="list-group mb-3">
            <li className="list-group-item">
              Taxi Service → Heathrow Airport: 0h 44m + £5.00 Drop-off Charge
              £24.60
            </li>
            <li className="list-group-item">
              Taxi Service → Gatwick Airport: 1h 19m + £5.00 Drop-off Charge
              £81.55
            </li>
            <li className="list-group-item">
              Taxi Service → Luton Airport: 1h 5m + £5.00 Drop-off Charge £93.60
            </li>
            <li className="list-group-item">
              Taxi Service → Stansted Airport: 1h 35m + £7.00 Drop-off Charge
              £126.20
            </li>
          </ul>
          <p className="text-center">
            Don’t see the route you are looking for? Enter your ideal
            destinations to see the price.
          </p>
          <div className="text-center">
            <a href="#get-quote" className="btn btn-secondary">
              Check Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TopRoutesSection;
