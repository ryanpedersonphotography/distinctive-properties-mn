import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaClock, FaMapMarkedAlt } from 'react-icons/fa';
import SEO from '../components/SEO';
import './About.css';

const About = () => {
  const stats = [
    { icon: <FaAward />, number: '500+', label: 'Properties Photographed' },
    { icon: <FaUsers />, number: '100+', label: 'Happy Clients' },
    { icon: <FaClock />, number: '24-48hr', label: 'Turnaround Time' },
    { icon: <FaMapMarkedAlt />, number: '50mi', label: 'Service Radius' }
  ];

  return (
    <>
      <SEO 
        title="About Distinctive Properties MN | Real Estate Photography Brainerd"
        description="Learn about Distinctive Properties of Minnesota, your trusted partner for professional real estate photography, video, and aerial services in the Brainerd Lakes Area since 2020."
        keywords="about real estate photographer Brainerd, professional property photography Minnesota, Brainerd Lakes area real estate media services"
      />

      <section className="about-hero">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Distinctive Properties
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your trusted partner in real estate visual marketing
          </motion.p>
        </div>
      </section>

      <section className="section about-intro">
        <div className="container">
          <div className="about-content-grid">
            <motion.div 
              className="about-text-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Showcasing Minnesota Properties at Their Best</h2>
              <p>
                Based in Central Minnesota and serving the entire Brainerd Lakes Area, 
                Distinctive Properties of Minnesota has been helping real estate professionals 
                market their listings with stunning visual content since our founding.
              </p>
              <p>
                We understand that in today's digital age, first impressions are everything. 
                That's why we combine state-of-the-art equipment with artistic vision to 
                create imagery that not only showcases properties but tells their unique story.
              </p>
              <p>
                From the pristine waters of Gull Lake to the charming communities of Nisswa 
                and Crosslake, we've captured the beauty and lifestyle that makes the 
                Brainerd Lakes Area one of Minnesota's most desirable regions.
              </p>
            </motion.div>
            <motion.div 
              className="about-image-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">Our Team at Work</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <h2 className="section-title">By the Numbers</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Commitment</h2>
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Quality First</h3>
              <p>
                We never compromise on quality. Every image, video, and virtual tour 
                is crafted with attention to detail and professional excellence.
              </p>
            </motion.div>
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Local Expertise</h3>
              <p>
                As locals, we know the Brainerd Lakes Area intimately. We understand 
                what makes each property special and how to highlight its best features.
              </p>
            </motion.div>
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Reliable Service</h3>
              <p>
                We respect your time and deadlines. Count on us for consistent 
                communication, punctual arrivals, and fast turnaround times.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section service-area">
        <div className="container">
          <h2 className="section-title">Service Area</h2>
          <p className="service-area-intro">
            We proudly serve all of the Brainerd Lakes Area and Central Minnesota, including:
          </p>
          <div className="locations-grid">
            <div className="location-column">
              <h4>Primary Service Areas</h4>
              <ul>
                <li>Brainerd</li>
                <li>Baxter</li>
                <li>Nisswa</li>
                <li>Pequot Lakes</li>
                <li>Crosslake</li>
              </ul>
            </div>
            <div className="location-column">
              <h4>Lake Communities</h4>
              <ul>
                <li>Gull Lake</li>
                <li>Pelican Lake</li>
                <li>Whitefish Chain</li>
                <li>Round Lake</li>
                <li>North Long Lake</li>
              </ul>
            </div>
            <div className="location-column">
              <h4>Extended Areas</h4>
              <ul>
                <li>Breezy Point</li>
                <li>Deerwood</li>
                <li>Garrison</li>
                <li>Crosby</li>
                <li>Aitkin</li>
              </ul>
            </div>
          </div>
          <p className="service-note">
            Don't see your area listed? Contact us! We regularly travel throughout 
            Central Minnesota for the right projects.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;