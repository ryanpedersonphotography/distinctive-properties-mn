import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Lightbox.css';

const Lightbox = ({ isOpen, onClose, images, currentIndex, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={onClose}>
              <FaTimes />
            </button>
            
            {currentIndex > 0 && (
              <button 
                className="lightbox-nav lightbox-prev" 
                onClick={() => onNavigate(currentIndex - 1)}
              >
                <FaChevronLeft />
              </button>
            )}
            
            {currentIndex < images.length - 1 && (
              <button 
                className="lightbox-nav lightbox-next" 
                onClick={() => onNavigate(currentIndex + 1)}
              >
                <FaChevronRight />
              </button>
            )}
            
            <motion.div 
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              key={currentIndex}
            >
              <img src={currentImage.image} alt={currentImage.title} />
              <div className="lightbox-caption">
                <h3>{currentImage.title}</h3>
                <p>{currentImage.type}</p>
              </div>
            </motion.div>
            
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;