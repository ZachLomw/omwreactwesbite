import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xbjnjppo");
  if (state.succeeded) {
      return <p className="form-success-message">Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-field">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button type="submit" disabled={state.submitting} className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
