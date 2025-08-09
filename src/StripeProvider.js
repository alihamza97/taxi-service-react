import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import App from './App';

const stripePromise = loadStripe('pk_test_51RuDc9GULV848GRtky9WSiU5H1CRuiJVhLDr1hQyCDmpbNxYDXiYW95oJKAU5vqGV285J3Mf3F2UumfkenVriJV600LeL1KAL8');

const StripeProvider = () => (
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
);

export default StripeProvider;
