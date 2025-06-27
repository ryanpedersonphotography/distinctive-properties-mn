import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryItems = [
    { id: 1, category: 'photography', title: 'Contemporary Lake Home', type: 'Exterior Photography', image: '/images/real-photos/DSC_3911.jpg' },
    { id: 2, category: 'aerial', title: 'Rural Property Overview', type: 'Drone Photography', image: '/images/real-photos/DJI_0984.jpg' },
    { id: 3, category: 'photography', title: 'Vaulted Great Room', type: 'Interior Photography', image: '/images/real-photos/_DSC4037.jpg' },
    { id: 4, category: 'photography', title: 'Modern Kitchen Design', type: 'Interior Photography', image: '/images/real-photos/DSC_9722-Enhanced-NR.jpg' },
    { id: 5, category: 'aerial', title: 'Lakefront Property', type: 'Aerial Photography', image: '/images/real-photos/DJI_0445.jpg' },
    { id: 6, category: 'photography', title: 'Luxury Master Suite', type: 'Interior Photography', image: '/images/real-photos/DSC_9403-Enhanced-NR.jpg' },
    { id: 7, category: 'photography', title: 'Twilight Architecture', type: 'Twilight Photography', image: '/images/real-photos/DSC_1246.jpg' },
    { id: 8, category: 'photography', title: 'Open Concept Living', type: 'Interior Photography', image: '/images/real-photos/DSC02853.jpg' }
  ];

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'photography', label: 'Photography' },
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
        title="Real Estate Photography Portfolio | Distinctive Properties MN Gallery"
        description="View our portfolio of professional real estate photography, drone aerial shots, video tours, and 3D Matterport virtual tours from properties throughout the Brainerd Lakes Area."
        keywords="real estate photography portfolio Brainerd, drone photography examples Minnesota, Matterport tour samples, property video gallery Brainerd Lakes"
      />

      <section className="gallery-hero">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcasing properties throughout the Brainerd Lakes Area
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