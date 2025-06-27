import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCamera, FaVideo, FaPlane, FaCube, FaCheck } from 'react-icons/fa';
import SEO from '../components/SEO';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'photography',
      icon: <FaCamera />,
      title: 'Real Estate Photography',
      description: 'Professional HDR photography that captures every detail of your property in the best possible light.',
      features: [
        'High-resolution HDR images',
        'Professional editing and color correction',
        'Wide-angle lens coverage',
        'Twilight/dusk photography',
        'Detail shots of key features',
        'Quick 24-48 hour turnaround'
      ],
      image: '/images/real-photos/_DSC4037.jpg',
      link: '/gallery',
      linkText: 'View Gallery'
    },
    {
      id: 'video',
      icon: <FaVideo />,
      title: 'Video Production',
      description: 'Cinematic video tours that tell the story of your property and create emotional connections with buyers.',
      features: [
        'Professional 4K video production',
        'Smooth gimbal stabilization',
        'Cinematic color grading',
        'Background music and titles',
        'Social media versions included',
        'Walkthrough and lifestyle videos'
      ],
      image: '/images/real-photos/DSC_9627.jpg',
      link: '/video',
      linkText: 'View Videos'
    },
    {
      id: 'aerial',
      icon: <FaPlane />,
      title: 'Aerial/Drone Photography',
      description: 'Stunning aerial perspectives that showcase properties and their surroundings from breathtaking angles.',
      features: [
        'FAA licensed drone pilots',
        'High-resolution aerial photos',
        'Aerial video footage',
        'Showcase property boundaries',
        'Highlight nearby amenities',
        'Lake and waterfront specialists'
      ],
      image: '/images/real-photos/DJI_0438.jpg',
      link: '/aerial',
      linkText: 'View Aerial Services'
    },
    {
      id: 'matterport',
      icon: <FaCube />,
      title: '3D Matterport Tours',
      description: 'Interactive 3D virtual tours that allow potential buyers to explore properties from anywhere, anytime.',
      features: [
        'Full 3D property scanning',
        'Interactive dollhouse view',
        'Accurate floor plans',
        'Measurement tools',
        'VR compatible tours',
        'Branded and unbranded options'
      ],
      image: '/images/real-photos/DSC02842.jpg',
      link: '/matterport',
      linkText: 'View 3D Tours'
    }
  ];

  return (
    <>
      <SEO 
        title="Real Estate Photography Services Brainerd MN | Distinctive Properties"
        description="Professional real estate photography, video production, drone aerial photography, and 3D Matterport tours in Brainerd Lakes Area. Elevate your property listings with our comprehensive media services."
        keywords="real estate photography services Brainerd, drone photography Brainerd Lakes, Matterport 3D tours Minnesota, real estate video production Central MN, aerial photography Nisswa Crosslake"
      />

      <section className="services-hero">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive real estate media solutions for the Brainerd Lakes Area
          </motion.p>
        </div>
      </section>

      <section className="section services-detail">
        <div className="container">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              id={service.id}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-info">
                <div className="service-header">
                  <span className="service-detail-icon">{service.icon}</span>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheck className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Link to={service.link} className="service-link-button">
                    {service.linkText}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <h2 className="section-title">Flexible Pricing Options</h2>
          <p className="pricing-intro">
            We offer competitive pricing tailored to your specific needs. 
            Whether you need a single service or a complete media package, 
            we have options that fit your budget and marketing goals.
          </p>
          <div className="pricing-features">
            <div className="pricing-feature">
              <h3>Volume Discounts</h3>
              <p>Special rates for real estate agents and brokers with multiple listings</p>
            </div>
            <div className="pricing-feature">
              <h3>Package Deals</h3>
              <p>Save when you bundle photography, video, and aerial services</p>
            </div>
            <div className="pricing-feature">
              <h3>Quick Turnaround</h3>
              <p>Standard 24-48 hour delivery with rush options available</p>
            </div>
          </div>
          <Link to="/contact" className="btn">Get a Custom Quote</Link>
        </div>
      </section>
    </>
  );
};

export default Services;