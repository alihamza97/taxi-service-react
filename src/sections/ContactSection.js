import React from 'react';

const ContactSection = () => (
  <section id="contact" className="contact-section py-5 bg-white">
    <div className="container">
      <h2 className="text-center mb-4">Contact Details</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm mb-3">
            <div className="card-body">
              <p><strong>Address:</strong> 214 Longview Av, London, United Kingdom</p>
              <p><strong>Phone:</strong> <a href="tel:0203535622">020 3535622</a> (Mon - Sunday: 00:00 - 24:00)</p>
              <p><strong>Email:</strong> <a href="mailto:info@taxiservice.co.uk">info@taxiservice.co.uk</a> (We reply within few minutes)</p>
              <div className="mb-2">
                <strong>Social:</strong> <br />
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">Facebook</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">Instagram</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="me-2">LinkedIn</a>
                <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
              <p><strong>Working Hours:</strong> 24 / 7 Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
