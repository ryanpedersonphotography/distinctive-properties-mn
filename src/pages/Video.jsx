import { useEffect } from 'react';
import SEO from '../components/SEO';
import './Video.css';

const Video = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      id: 1,
      vimeoId: '851037884',
      title: 'Luxury Lakefront Estate',
      description: 'Stunning aerial and interior footage showcasing waterfront luxury'
    },
    {
      id: 2,
      vimeoId: '851024290',
      title: 'Modern Family Home',
      description: 'Beautiful property tour highlighting modern amenities and design'
    },
    {
      id: 3,
      vimeoId: '815677798',
      title: 'Executive Property Showcase',
      description: 'Professional video tour featuring high-end finishes and details'
    },
    {
      id: 4,
      vimeoId: '487068115',
      title: 'Scenic Lake Property',
      description: 'Captivating views and serene settings in the Brainerd Lakes Area'
    }
  ];

  return (
    <>
      <SEO 
        title="Real Estate Video Tours - Distinctive Properties of Minnesota"
        description="Professional real estate video tours and aerial drone footage in Central Minnesota. Cinematic property videos that showcase homes at their best."
        keywords="real estate video, property video tours, drone video, aerial footage, Brainerd video tours, Minnesota real estate videography"
      />
      
      <div className="video-page">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>Professional Real Estate Videos</h1>
              <p className="hero-subtitle">
                Cinematic property tours that tell your home's story
              </p>
            </div>
          </div>
        </section>

        <section className="video-intro">
          <div className="container">
            <div className="intro-content">
              <h2>Video Tours That Captivate Buyers</h2>
              <p>
                Our professional video tours combine stunning visuals, smooth cinematography, 
                and strategic storytelling to showcase properties at their absolute best. 
                From sweeping drone footage to intimate interior details, we create videos 
                that emotionally connect with buyers and drive real results.
              </p>
            </div>
          </div>
        </section>

        <section className="featured-videos">
          <div className="container">
            <h2>Featured Property Videos</h2>
            <p className="section-subtitle">
              Experience the quality and craftsmanship of our video tours
            </p>
            
            <div className="videos-grid">
              {videos.map(video => (
                <div key={video.id} className="video-card">
                  <div className="video-wrapper">
                    <iframe
                      src={`https://player.vimeo.com/video/${video.vimeoId}?h=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  </div>
                  <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="video-services">
          <div className="container">
            <h2>Our Video Services</h2>
            
            <div className="services-grid">
              <div className="service">
                <div className="service-icon">🎬</div>
                <h3>Property Video Tours</h3>
                <p>
                  Professional walkthrough videos that guide viewers through the property, 
                  highlighting key features and creating an emotional connection with 
                  potential buyers.
                </p>
              </div>
              
              <div className="service">
                <div className="service-icon">🚁</div>
                <h3>Aerial Drone Footage</h3>
                <p>
                  Breathtaking aerial views that showcase the property's setting, 
                  neighborhood, and surrounding amenities. Perfect for waterfront 
                  and acreage properties.
                </p>
              </div>
              
              <div className="service">
                <div className="service-icon">🎞️</div>
                <h3>Lifestyle Videos</h3>
                <p>
                  Story-driven videos that showcase not just the property, but the 
                  lifestyle it offers. Perfect for luxury listings and unique properties.
                </p>
              </div>
              
              <div className="service">
                <div className="service-icon">📱</div>
                <h3>Social Media Cuts</h3>
                <p>
                  Optimized shorter versions perfect for Instagram, Facebook, and 
                  other social platforms to maximize your property's online exposure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="video-benefits">
          <div className="container">
            <h2>Why Video Marketing Works</h2>
            
            <div className="benefits-list">
              <div className="benefit-item">
                <h3>73% More Inquiries</h3>
                <p>Listings with video receive significantly more inquiries than those with photos alone</p>
              </div>
              
              <div className="benefit-item">
                <h3>403% More Traffic</h3>
                <p>Video drives massive increases in online traffic to your listings</p>
              </div>
              
              <div className="benefit-item">
                <h3>Faster Sales</h3>
                <p>Properties with video tours sell 20% faster on average</p>
              </div>
              
              <div className="benefit-item">
                <h3>Higher Engagement</h3>
                <p>Buyers spend 3x more time viewing listings with video content</p>
              </div>
            </div>
          </div>
        </section>

        <section className="video-process">
          <div className="container">
            <h2>Our Video Production Process</h2>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>Pre-Production Planning</h3>
                <p>We scout the property and plan shots to highlight its best features</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>Professional Filming</h3>
                <p>Using cinema-grade equipment, we capture stunning footage throughout the property</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>Expert Editing</h3>
                <p>Professional color grading, music selection, and editing create a polished final product</p>
              </div>
              
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>Quick Delivery</h3>
                <p>Receive your video within 48 hours, ready for all marketing platforms</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Showcase Your Property with Video?</h2>
              <p>
                Let us create a stunning video tour that helps your listing stand out 
                and sell faster in today's competitive market.
              </p>
              <a href="/contact" className="cta-button">Schedule Video Shoot</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Video;