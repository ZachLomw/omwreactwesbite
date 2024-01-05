import React from 'react';
import './ContactForm.css';

function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
  
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
    .then(response => {
      if (response.ok) {
        console.log('Form successfully submitted');
        // Handle successful form submission (e.g., display thank you message)
      } else {
        throw new Error('Form submission failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      // Handle form submission error (e.g., display error message)
    });
  };
  
  
  

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
