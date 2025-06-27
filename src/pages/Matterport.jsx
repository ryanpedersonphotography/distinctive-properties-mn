import { useEffect, useState } from 'react';
import SEO from '../components/SEO';
import MatterportLightbox from '../components/MatterportLightbox';
import './Matterport.css';

const Matterport = () => {
  const [selectedTour, setSelectedTour] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (tour) => {
    setSelectedTour(tour);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedTour(null), 300);
  };

  const tours = [
    {
      id: 1,
      title: "Luxury Lake Home - Nisswa",
      url: "https://my.matterport.com/show/?m=hUfjP6hxmL8",
      description: "Stunning lakefront property with panoramic views"
    },
    {
      id: 2,
      title: "Executive Estate - Brainerd",
      url: "https://my.matterport.com/show/?m=irWj1XpGjYJ",
      description: "Spacious family home with modern amenities"
    }
  ];

  return (
    <>
      <SEO 
        title="3D Matterport Tours - Distinctive Properties of Minnesota"
        description="Experience immersive 3D virtual tours of Central Minnesota properties. Walk through homes from anywhere with our professional Matterport scanning services."
        keywords="Matterport tours, 3D virtual tours, real estate virtual tours, Brainerd Matterport, Minnesota 3D tours"
      />
      
      <div className="matterport-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>3D Matterport Virtual Tours</h1>
              <p className="hero-subtitle">
                Immersive property experiences that bring listings to life
              </p>
            </div>
          </div>
        </section>

        <section className="matterport-intro">
          <div className="container">
            <div className="intro-content">
              <h2>Experience Properties Like Never Before</h2>
              <p>
                Our Matterport 3D tours provide an immersive, interactive experience that allows 
                potential buyers to explore every detail of a property from the comfort of their 
                own home. These virtual walkthroughs have been proven to increase engagement, 
                reduce unnecessary showings, and help properties sell faster.
              </p>
            </div>
          </div>
        </section>

        <section className="featured-tours">
          <div className="container">
            <h2>Featured Virtual Tours</h2>
            <p className="section-subtitle">
              Explore these stunning Central Minnesota properties in full 3D
            </p>
            
            <div className="tours-grid">
              {tours.map(tour => (
                <div key={tour.id} className="tour-card" onClick={() => openLightbox(tour)}>
                  <div className="tour-iframe-wrapper">
                    <iframe
                      src={tour.url}
                      title={tour.title}
                      allow="fullscreen; vr"
                      allowFullScreen
                      style={{ pointerEvents: 'none' }}
                    />
                    <div className="tour-overlay">
                      <div className="view-button">View 3D Tour</div>
                    </div>
                  </div>
                  <div className="tour-info">
                    <h3>{tour.title}</h3>
                    <p>{tour.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="matterport-benefits">
          <div className="container">
            <h2>Why Choose Matterport 3D Tours?</h2>
            
            <div className="benefits-grid">
              <div className="benefit">
                <div className="benefit-icon">📱</div>
                <h3>24/7 Open House</h3>
                <p>
                  Allow buyers to tour properties anytime, from anywhere in the world. 
                  Perfect for out-of-town buyers or those with busy schedules.
                </p>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">📐</div>
                <h3>Accurate Measurements</h3>
                <p>
                  Built-in measurement tools let viewers check room dimensions and plan 
                  furniture placement before ever stepping foot in the property.
                </p>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">🎯</div>
                <h3>Qualified Showings</h3>
                <p>
                  Buyers who schedule in-person showings after viewing the 3D tour are 
                  more serious and better informed about the property.
                </p>
              </div>
              
              <div className="benefit">
                <div className="benefit-icon">💎</div>
                <h3>Premium Marketing</h3>
                <p>
                  Stand out from the competition with cutting-edge technology that 
                  showcases your commitment to innovative marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="matterport-features">
          <div className="container">
            <h2>Our Matterport Service Includes</h2>
            
            <div className="features-list">
              <div className="feature">
                <h3>Complete Property Scanning</h3>
                <p>Professional capture of every room and space using advanced Matterport cameras</p>
              </div>
              
              <div className="feature">
                <h3>Dollhouse View</h3>
                <p>See the entire property layout in a stunning 3D dollhouse perspective</p>
              </div>
              
              <div className="feature">
                <h3>Floor Plans</h3>
                <p>Automatically generated floor plans with accurate measurements</p>
              </div>
              
              <div className="feature">
                <h3>Virtual Reality Ready</h3>
                <p>Compatible with VR headsets for the ultimate immersive experience</p>
              </div>
              
              <div className="feature">
                <h3>Highlight Reel</h3>
                <p>Guided tour feature that showcases the property's best features</p>
              </div>
              
              <div className="feature">
                <h3>MLS Integration</h3>
                <p>Easy embedding for MLS listings and real estate websites</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Showcase Your Property in 3D?</h2>
              <p>
                Give your listings the competitive edge with immersive Matterport virtual tours 
                that help properties sell faster and for more money.
              </p>
              <a href="/contact" className="cta-button">Schedule Your 3D Tour</a>
            </div>
          </div>
        </section>
      </div>
      
      <MatterportLightbox 
        isOpen={isLightboxOpen} 
        onClose={closeLightbox} 
        tour={selectedTour} 
      />
    </>
  );
};

export default Matterport;