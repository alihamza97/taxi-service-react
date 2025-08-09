import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import StripeProvider from './StripeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StripeProvider />);
