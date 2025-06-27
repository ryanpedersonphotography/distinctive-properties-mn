import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryItems = [
    { id: 1, category: 'exterior', title: 'Contemporary Lake Home', type: 'Exterior Photography', image: '/images/real-photos/DSC_3911.jpg' },
    { id: 2, category: 'aerial', title: 'Rural Property Overview', type: 'Drone Photography', image: '/images/real-photos/DJI_0984.jpg' },
    { id: 3, category: 'interior', title: 'Vaulted Great Room', type: 'Interior Photography', image: '/images/real-photos/_DSC4037.jpg' },
    { id: 4, category: 'interior', title: 'Modern Kitchen Design', type: 'Interior Photography', image: '/images/real-photos/DSC_9722-Enhanced-NR.jpg' },
    { id: 5, category: 'aerial', title: 'Lakefront Property', type: 'Aerial Photography', image: '/images/real-photos/DJI_0445.jpg' },
    { id: 6, category: 'interior', title: 'Luxury Master Suite', type: 'Interior Photography', image: '/images/real-photos/DSC_9403-Enhanced-NR.jpg' },
    { id: 7, category: 'exterior', title: 'Twilight Architecture', type: 'Twilight Photography', image: '/images/real-photos/DSC_1246.jpg' },
    { id: 8, category: 'interior', title: 'Open Concept Living', type: 'Interior Photography', image: '/images/real-photos/DSC02853.jpg' }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'interior', label: 'Interior' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'aerial', label: 'Aerial/Drone' }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

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
        title="Interior & Exterior Real Estate Photography | Distinctive Properties MN Stills"
        description="Professional interior and exterior still photography for real estate listings in the Brainerd Lakes Area. High-quality images that showcase properties at their best."
        keywords="interior real estate photography Brainerd, exterior property photography Minnesota, still photography real estate, professional property photos Brainerd Lakes"
      />

      <section className="gallery-hero">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Interior & Exterior Stills
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional still photography that captures both the warmth of interior spaces and the grandeur of exterior architecture
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ marginTop: '2rem' }}
          >
            <Link to="/contact" className="hero-cta-btn">Schedule Photo Shoot</Link>
          </motion.div>
        </div>
      </section>

      <section className="section stills-intro">
        <div className="container">
          <motion.div 
            className="stills-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="section-title">The Power of Professional Still Photography</h2>
            <div className="content-grid">
              <div className="content-item">
                <h3>Interior Photography</h3>
                <p>
                  Our interior photography captures the essence of each space, from cozy living rooms 
                  to gourmet kitchens. We use professional lighting and composition techniques to 
                  highlight architectural features, natural light, and the flow of each room. Every 
                  shot is carefully crafted to help potential buyers envision themselves in the space.
                </p>
              </div>
              <div className="content-item">
                <h3>Exterior Photography</h3>
                <p>
                  First impressions matter. Our exterior photography showcases curb appeal, 
                  landscaping, and architectural details that make each property unique. We capture 
                  homes in the best light, including stunning twilight shots that make properties 
                  stand out in listings and marketing materials.
                </p>
              </div>
            </div>
            <div className="stills-benefits">
              <h3>Why Quality Stills Matter</h3>
              <ul>
                <li>Properties with professional photos sell 32% faster than those without</li>
                <li>Listings with high-quality images receive 118% more online views</li>
                <li>Professional photography can increase sale price by up to 3-5%</li>
                <li>Buyers spend 60% more time viewing listings with professional photos</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="gallery-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <motion.div 
            className="gallery-grid"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials">
            <motion.div 
              className="testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>
                "The photography and drone footage from Distinctive Properties transformed 
                our listings. Properties are selling faster and for better prices. 
                Highly recommended for any serious real estate professional in the Brainerd area!"
              </p>
              <cite>- Sarah Johnson, Brainerd Lakes Realty</cite>
            </motion.div>
            <motion.div 
              className="testimonial"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                "The 3D Matterport tours have been a game-changer for our out-of-state buyers. 
                The quality and professionalism are outstanding. They truly capture the 
                essence of Minnesota lake living."
              </p>
              <cite>- Mike Peterson, Crosslake Properties</cite>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={filteredItems}
        currentIndex={selectedImageIndex}
        onNavigate={navigateLightbox}
      />
    </>
  );
};

export default Gallery;