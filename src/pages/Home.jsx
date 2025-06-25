import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCamera, FaVideo, FaPlane, FaCube } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Home.css';

const Home = () => {
  const services = [
    {
      icon: <FaCamera />,
      title: 'Professional Photography',
      description: 'High-quality HDR real estate photography that showcases properties in their best light.'
    },
    {
      icon: <FaVideo />,
      title: 'Video Production',
      description: 'Cinematic video tours that bring properties to life and engage potential buyers.'
    },
    {
      icon: <FaPlane />,
      title: 'Aerial/Drone Services',
      description: 'Stunning aerial views showcasing properties and their surroundings from above.'
    },
    {
      icon: <FaCube />,
      title: '3D Matterport Tours',
      description: 'Interactive virtual tours allowing buyers to explore properties from anywhere.'
    }
  ];

  return (
    <>
      <SEO 
        title="Professional Real Estate Photography & Video | Distinctive Properties MN"
        description="Professional real estate photography, video, aerial drone, and 3D Matterport services in Brainerd Lakes Area and Central Minnesota. Showcase your properties with stunning visuals."
        keywords="real estate photography Brainerd, drone photography Minnesota, Matterport tours Brainerd Lakes, real estate video Central Minnesota, property photography Brainerd MN"
      />
      
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Distinctive Properties of Minnesota
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Real Estate Media Services in the Brainerd Lakes Area
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="btn">Get Started</Link>
            <Link to="/gallery" className="btn btn-secondary">View Portfolio</Link>
          </motion.div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn">Learn More About Our Services</Link>
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Elevate Your Real Estate Marketing</h2>
              <p>
                Based in Central Minnesota and serving the Brainerd Lakes Area, 
                Distinctive Properties of Minnesota specializes in creating compelling 
                visual content that helps properties stand out in today's competitive market.
              </p>
              <p>
                From stunning photography to immersive 3D tours, we provide comprehensive 
                media services that showcase the unique features and beauty of every property.
              </p>
              <Link to="/about" className="btn">About Us</Link>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/images/hero/hero-services.jpg" alt="Professional Real Estate Photography Equipment" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Showcase Your Property?</h2>
            <p>
              Let us help you create stunning visuals that attract buyers and 
              sell properties faster in the Brainerd Lakes Area.
            </p>
            <Link to="/contact" className="btn">Schedule a Consultation</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;