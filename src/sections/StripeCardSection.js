import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#32325d',
      '::placeholder': { color: '#aab7c4' },
    },
    invalid: { color: '#fa755a', iconColor: '#fa755a' },
  },
};

const StripeCardSection = () => (
  <div className="mb-3">
    <label className="form-label">Credit or debit card</label>
    <div className="form-control p-2">
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </div>
  </div>
);

export default StripeCardSection;
