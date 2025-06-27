import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MatterportLightbox.css';

const MatterportLightbox = ({ isOpen, onClose, tour }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="matterport-lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="matterport-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="matterport-lightbox-close" 
              onClick={onClose}
              aria-label="Close tour"
              title="Close (ESC)"
            >
              ×
            </button>
            
            <motion.div 
              className="matterport-lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="matterport-lightbox-iframe-wrapper">
                <iframe
                  src={tour.url}
                  title={tour.title}
                  allow="fullscreen; vr"
                  allowFullScreen
                />
              </div>
              <div className="matterport-lightbox-info">
                <h3>{tour.title}</h3>
                <p>{tour.description}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MatterportLightbox;