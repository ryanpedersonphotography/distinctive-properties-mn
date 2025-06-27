import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './VideoLightbox.css';

const VideoLightbox = ({ isOpen, onClose, video }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="video-lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="video-lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="video-lightbox-close" 
              onClick={onClose}
              aria-label="Close video"
              title="Close (ESC)"
            >
              ×
            </button>
            
            <motion.div 
              className="video-lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="video-lightbox-player">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?h=0&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
              </div>
              <div className="video-lightbox-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLightbox;