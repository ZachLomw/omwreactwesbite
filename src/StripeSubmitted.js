import React from 'react';
import './StripeSubmitted.css'; // Import a CSS file for styling

function StripeFinished() {
  return (
    <div className="stripe-finished-container">
      <h1>Thank You!</h1>
      <p>Thank you for completing the Stripe onboarding process! We will get back to you shortly reguarding your driver approval.</p>
    </div>
  );
}

export default StripeFinished;
