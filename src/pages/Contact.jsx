
import { useState } from "react";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiSend,
  FiCheckCircle
} from "react-icons/fi";

import "../styles/Contact.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: ""
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="contact-hero">
        <div className="container contact-hero-content">
          <span className="section-tag">GET IN TOUCH</span>

          <h1>
            Let's Start a
            <span className="text-highlight"> Conversation.</span>
          </h1>

          <p>
            Have a question, an idea or a project in mind? Tell us what
            you're looking for and let's explore how we can help.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="section contact-main-section">
        <div className="container contact-layout">

          {/* Contact information */}
          <aside className="contact-info-panel">
            <span className="section-tag">CONTACT INFORMATION</span>

            <h2>We'd Love to Hear From You</h2>

            <p>
              Share your requirements with us. Use the contact details
              below or send an enquiry through the form.
            </p>

            <div className="contact-info-list">

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FiMail />
                </div>
                <div>
                  <span>Email</span>
                  <a href="mailto:info@rkconsultants.com">
                    info@rkconsultants.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FiPhone />
                </div>
                <div>
                  <span>Phone</span>
                  <p>Contact number to be added</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FiMapPin />
                </div>
                <div>
                  <span>Location</span>
                  <p>Location details to be added</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <FiClock />
                </div>
                <div>
                  <span>Working Hours</span>
                  <p>Business hours to be confirmed</p>
                </div>
              </div>

            </div>

            <div className="contact-info-bottom">
              <h3>Let's build something meaningful.</h3>
              <p>
                Good ideas begin with a conversation. Tell us about yours.
              </p>
            </div>
          </aside>

          {/* Enquiry form */}
          <div className="contact-form-panel">
            <div className="contact-form-heading">
              <span className="section-tag">SEND AN ENQUIRY</span>
              <h2>Tell Us About Your Project</h2>
              <p>
                Fill in the details below. All fields are required.
              </p>
            </div>

            {submitted && (
              <div className="contact-success-message" role="status">
                <FiCheckCircle />
                <div>
                  <strong>Thank you for contacting us!</strong>
                  <span>
                    Your form was validated successfully. This demo does
                    not send or store enquiries yet.
                  </span>
                </div>
              </div>
            )}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-service">Service Interested In *</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Digital Marketing Strategy">Digital Marketing Strategy</option>
                    <option value="SEO">Search Engine Optimization</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Branding">Branding & Creative Design</option>
                    <option value="Performance Marketing">Performance Marketing</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Business Analytics">Business Analytics</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Your Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  placeholder="Tell us about your project or requirements..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="primary-btn contact-submit-btn">
                Send Enquiry <FiSend />
              </button>

              <p className="contact-form-note">
                Frontend demo only. Your enquiry is not sent to an email
                address or saved to a database.
              </p>
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;
