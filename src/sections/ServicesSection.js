import React from "react";

const services = [
  {
    icon: "🚖",
    title: "Taxi Services",
    desc: "Local 24hr Taxi & Minicab company for all journeys & airports.",
  },
  {
    icon: "🚌",
    title: "Minibus Hire",
    desc: "9, 12, 14, 16, and 24 seat minibuses for all travel requirements.",
  },
  {
    icon: "✈️",
    title: "Airport Taxi",
    desc: "Best taxi for airport transfers to and from your location.",
  },
  {
    icon: "💼",
    title: "Account Service",
    desc: "Business customers can take advantage of our account facilities.",
  },
  {
    icon: "🚗",
    title: "Executive Taxis",
    desc: "Luxurious and classy executive taxi service for your comfort.",
  },
  {
    icon: "📦",
    title: "Courier Services",
    desc: "Send your parcel anywhere in the UK with same-day or next-day delivery.",
  },
];

const ServicesSection = () => (
  <section id="services" className="services-section py-5 bg-light">
    <div className="container">
      <h2 className="text-center mb-4 fw-bold">Our Services</h2>
      <div className="row g-4 justify-content-center">
        {services.map((service, idx) => (
          <div className="col-md-4 col-lg-3" key={idx}>
            <div className="card h-100 shadow-sm border-0 text-center p-3">
              <div style={{ fontSize: "2.5rem" }} className="mb-2">
                {service.icon}
              </div>
              <div className="card-body">
                <h4 className="card-title fw-semibold mb-2">{service.title}</h4>
                <p className="card-text small text-secondary">{service.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
