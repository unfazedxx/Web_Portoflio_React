import React, { useState } from 'react';
import "./Contact.css"; // assuming you have a CSS file for styling

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // form handler
    //console log only logs the form submission into the console, need to include a form submission where i can recieve the data in my inbox 
    console.log('Form submitted:', formData);
    // reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  //html style jsx code to display on the page 
  return (
    <div className="container">
      <div className='contactContainer'>
      <h1>Contact</h1>
      </div>
      <p>If you wish to contact me, please leave your name, email address and a short message and I will reach out as soon as possible!!</p>
      <br />
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Email input */}
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="Invalid email address"
          />
        </div>
        {/* Message input */}
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
