import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlane, FaCheck, FaCamera, FaShieldAlt, FaMapMarkedAlt, FaHome } from 'react-icons/fa';
import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
import './Aerial.css';
import './Gallery.css';

const Aerial = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const benefits = [
    {
      icon: <FaMapMarkedAlt />,
      title: 'Complete Property Overview',
      description: 'Show the entire property layout, boundaries, and surrounding area in one stunning shot.'
    },
    {
      icon: <FaHome />,
      title: 'Highlight Property Features',
      description: 'Showcase pools, large yards, waterfront access, and other premium features from the perfect angle.'
    },
    {
      icon: <FaCamera />,
      title: 'Stand Out in Listings',
      description: 'Properties with aerial photos receive 68% more views and sell 32% faster than those without.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Professional & Safe',
      description: 'FAA Part 107 certified pilots ensure safe, legal, and insured aerial operations.'
    }
  ];

  // Extended aerial gallery images
  const aerialGalleryImages = [
    {
      id: 1,
      src: '/images/real-photos/DJI_0054.jpg',
      title: 'Lakefront Estate Aerial',
      type: 'Waterfront Property',
      image: '/images/real-photos/DJI_0054.jpg'
    },
    {
      id: 2,
      src: '/images/real-photos/DJI_0445.jpg',
      title: 'Luxury Home Overview',
      type: 'Residential Property',
      image: '/images/real-photos/DJI_0445.jpg'
    },
    {
      id: 3,
      src: '/images/real-photos/DJI_0984.jpg',
      title: 'Estate Property Boundaries',
      type: 'Large Estate',
      image: '/images/real-photos/DJI_0984.jpg'
    },
    {
      id: 4,
      src: '/images/real-photos/DJI_0438.jpg',
      title: 'Sunset Property View',
      type: 'Luxury Home',
      image: '/images/real-photos/DJI_0438.jpg'
    },
    {
      id: 5,
      src: '/images/gallery/aerial-1.jpg',
      title: 'Lake Home Aerial',
      type: 'Waterfront Property',
      image: '/images/gallery/aerial-1.jpg'
    },
    {
      id: 6,
      src: '/images/real-photos/DJI_0054.jpg',
      title: 'Forest Property Overview',
      type: 'Wooded Estate',
      image: '/images/real-photos/DJI_0054.jpg'
    },
    {
      id: 7,
      src: '/images/real-photos/DJI_0445.jpg',
      title: 'Pool & Amenities View',
      type: 'Luxury Property',
      image: '/images/real-photos/DJI_0445.jpg'
    },
    {
      id: 8,
      src: '/images/real-photos/DJI_0984.jpg',
      title: 'Neighborhood Context',
      type: 'Residential Area',
      image: '/images/real-photos/DJI_0984.jpg'
    }
  ];

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
      <SEO 
        title="Aerial Drone Photography Services Brainerd MN | Distinctive Properties"
        description="Professional aerial and drone photography for real estate in Brainerd Lakes Area. FAA certified pilots capture stunning aerial views that showcase your property from breathtaking perspectives."
        keywords="aerial photography Brainerd MN, drone photography Brainerd Lakes, real estate drone services, aerial property photos Minnesota, FAA certified drone pilot Brainerd"
      />

      {/* Hero Section */}
      <section className="aerial-hero">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Aerial & Drone Photography
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elevate your property listings with stunning aerial perspectives
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section aerial-overview">
        <div className="container">
          <motion.div 
            className="overview-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="overview-text">
              <h2>Capture Properties from a New Perspective</h2>
              <p className="lead">
                In today's competitive real estate market, aerial photography has become essential for 
                showcasing properties effectively. Our professional drone services provide stunning 
                bird's-eye views that highlight your property's best features and its relationship 
                to the surrounding area.
              </p>
              <p>
                Whether it's capturing the expanse of a large estate, the waterfront setting of a 
                lake home, or the neighborhood context of a residential property, our aerial photography 
                delivers perspectives that ground-level photos simply can't achieve.
              </p>
              <div className="aerial-features">
                <div className="feature-item">
                  <FaCheck className="check-icon" />
                  <span>High-resolution 4K aerial photos</span>
                </div>
                <div className="feature-item">
                  <FaCheck className="check-icon" />
                  <span>Multiple angles and elevations</span>
                </div>
                <div className="feature-item">
                  <FaCheck className="check-icon" />
                  <span>Perfect for waterfront properties</span>
                </div>
                <div className="feature-item">
                  <FaCheck className="check-icon" />
                  <span>Quick turnaround times</span>
                </div>
              </div>
            </div>
            <div className="overview-image">
              <img src="/images/real-photos/DJI_0984.jpg" alt="Professional drone photography" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section aerial-benefits">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Aerial Photography?
          </motion.h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="section aerial-showcase">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Aerial Work
          </motion.h2>
          <div className="showcase-grid">
            {aerialGalleryImages.slice(0, 5).map((image, index) => (
              <motion.div 
                key={image.id}
                className="showcase-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={image.src} alt={image.title} />
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="showcase-cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/gallery" className="btn-secondary">View Full Gallery</Link>
          </motion.div>
        </div>
      </section>

      {/* Full Aerial Gallery */}
      <section className="section aerial-gallery">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Aerial Photography Gallery
          </motion.h2>
          <motion.p 
            className="gallery-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Click any image to view in full resolution
          </motion.p>
          <motion.div 
            className="gallery-grid"
            layout
          >
            {aerialGalleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                onClick={() => openLightbox(index)}
                whileHover={{ y: -5 }}
              >
                <div className="gallery-image-container">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <div className="gallery-info">
                      <h3>{item.title}</h3>
                      <p>{item.type}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety & Certification */}
      <section className="section aerial-safety">
        <div className="container">
          <motion.div 
            className="safety-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="safety-icon">
              <FaShieldAlt />
            </div>
            <h2>FAA Certified & Fully Insured</h2>
            <p className="safety-description">
              Safety and professionalism are our top priorities. Our drone pilots are FAA Part 107 
              certified and carry comprehensive liability insurance. We follow all federal and local 
              regulations, obtain necessary permits, and conduct thorough pre-flight safety checks 
              to ensure smooth, legal operations.
            </p>
            <div className="safety-badges">
              <div className="badge">
                <FaPlane />
                <span>FAA Part 107 Certified</span>
              </div>
              <div className="badge">
                <FaShieldAlt />
                <span>Fully Insured</span>
              </div>
              <div className="badge">
                <FaCheck />
                <span>Legal & Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section aerial-cta">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Elevate Your Listings?</h2>
            <p>
              Add stunning aerial photography to your next property listing and watch it soar above the competition.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Schedule Aerial Shoot</Link>
              <Link to="/services" className="btn btn-secondary">View All Services</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox 
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        currentIndex={selectedImageIndex}
        images={aerialGalleryImages.map(item => ({
          src: item.image,
          alt: item.title
        }))}
        onNavigate={navigateLightbox}
      />
    </>
  );
};

export default Aerial;