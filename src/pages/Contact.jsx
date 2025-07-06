import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    squareFootage: '',
    services: [],
    message: '',
    preferredDate: '',
    preferredTime: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const services = [
    'Real Estate Photography',
    'Video Production',
    'Aerial/Drone Photography',
    '3D Matterport Tours'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Prepare form data
    const formBody = encode({
      'form-name': 'contact',
      'name': formData.name,
      'email': formData.email,
      'phone': formData.phone,
      'propertyAddress': formData.propertyAddress,
      'squareFootage': formData.squareFootage,
      'services': formData.services.join(', '),
      'preferredDate': formData.preferredDate,
      'preferredTime': formData.preferredTime,
      'message': formData.message,
      'bot-field': ''
    });

    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formBody
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyAddress: '',
        squareFootage: '',
        services: [],
        message: '',
        preferredDate: '',
        preferredTime: ''
      });
      
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    })
    .catch(error => {
      console.error('Form error:', error);
      setFormStatus('error');
    });
  };

  return (
    <>
      <SEO 
        title="Contact Distinctive Properties MN | Book Real Estate Photography Brainerd"
        description="Contact Distinctive Properties of Minnesota for professional real estate photography, video, and aerial services in the Brainerd Lakes Area. Fast turnaround, competitive pricing."
        keywords="contact real estate photographer Brainerd, book property photography Minnesota, hire drone photographer Brainerd Lakes, real estate media services quote"
      />

      <section className="contact-hero">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's create stunning visuals for your property listings
          </motion.p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Get in Touch</h2>
              <p className="contact-intro">
                Ready to showcase your property with professional media? 
                Contact us today to book an appointment and get fast turnaround.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-detail-icon" />
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:bpederson@distinctivepropertiesmn.com">bpederson@distinctivepropertiesmn.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaPhone className="contact-detail-icon" />
                  <div>
                    <h3>Phone</h3>
                    <p>Call us for immediate assistance</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-detail-icon" />
                  <div>
                    <h3>Service Area</h3>
                    <p>Brainerd Lakes Area & Central Minnesota</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaClock className="contact-detail-icon" />
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>

              <div className="response-time">
                <h3>Quick Response Guarantee</h3>
                <p>
                  We respond to all inquiries within 2 hours during business hours 
                  and within 12 hours on evenings and weekends.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="contact-form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <h2>🏠 Book an Appointment</h2>
                <div className="form-tagline">Free Consultation • Fast Response • Professional Service</div>
                
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="propertyAddress">Property Address</label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="123 Main St, Brainerd, MN"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="squareFootage">Square Footage</label>
                  <input
                    type="text"
                    id="squareFootage"
                    name="squareFootage"
                    value={formData.squareFootage}
                    onChange={handleChange}
                    placeholder="e.g., 2,500"
                  />
                </div>

                <div className="form-group">
                  <label>📸 Services Needed</label>
                  <div className="checkbox-group">
                    {services.map(service => (
                      <label key={service} className="checkbox-label">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="preferredDate">Preferred Shoot Date</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Shoot Time</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredTime"
                        value="morning"
                        checked={formData.preferredTime === 'morning'}
                        onChange={handleChange}
                      />
                      Morning
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredTime"
                        value="afternoon"
                        checked={formData.preferredTime === 'afternoon'}
                        onChange={handleChange}
                      />
                      Afternoon
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="preferredTime"
                        value="flexible"
                        checked={formData.preferredTime === 'flexible'}
                        onChange={handleChange}
                      />
                      Flexible
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your property, timeline, and any specific shots or features you'd like captured..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn submit-btn"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus === 'success' && (
                  <motion.div 
                    className="form-success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Thank you for your inquiry! We'll contact you within 24 hours.</p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div 
                    className="form-error"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>Something went wrong. Please try again or email us directly.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;