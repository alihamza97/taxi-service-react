import React from 'react';
import { useLocation } from 'react-router-dom';
import GetAQuoteSection from '../sections/GetAQuoteSection';

const BookingPage = () => {
	const location = useLocation();
	const car = location.state?.car;
	const form = location.state?.form;
	return <GetAQuoteSection car={car} form={form} />;
};

export default BookingPage;
