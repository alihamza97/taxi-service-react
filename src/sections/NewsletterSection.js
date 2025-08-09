import React from "react";

const NewsletterSection = () => (
  <section
    id="newsletter"
    className="newsletter-section py-5 bg-primary text-white"
  >
    <div className="container">
      <h2 className="text-center mb-4">Newsletter</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscribed! (Demo only)");
        }}
        className="row justify-content-center"
      >
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email Address"
              required
            />
            <button type="submit" className="btn btn-light">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default NewsletterSection;
