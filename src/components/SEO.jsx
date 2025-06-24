import { useEffect } from 'react';

const SEO = ({ title, description, keywords, image }) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaTags = {
      description,
      keywords,
      'og:title': title,
      'og:description': description,
      'og:image': image || '/og-image.jpg',
      'og:type': 'website',
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': image || '/og-image.jpg',
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      if (content) {
        let element = document.querySelector(`meta[name="${name}"]`) || 
                     document.querySelector(`meta[property="${name}"]`);
        
        if (!element) {
          element = document.createElement('meta');
          if (name.startsWith('og:')) {
            element.setAttribute('property', name);
          } else {
            element.setAttribute('name', name);
          }
          document.head.appendChild(element);
        }
        
        element.setAttribute('content', content);
      }
    });

    // Add structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Distinctive Properties of Minnesota",
      "image": "https://distinctivepropertiesmn.com/og-image.jpg",
      "url": "https://distinctivepropertiesmn.com",
      "description": "Professional real estate photography, video, aerial drone, and 3D Matterport services in Brainerd Lakes Area and Central Minnesota.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brainerd",
        "addressRegion": "MN",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 46.3588,
        "longitude": -94.2006
      },
      "areaServed": [
        "Brainerd",
        "Baxter",
        "Nisswa",
        "Pequot Lakes",
        "Crosslake",
        "Breezy Point",
        "Deerwood",
        "Garrison",
        "Crosby",
        "Aitkin",
        "Central Minnesota"
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 46.3588,
          "longitude": -94.2006
        },
        "geoRadius": "50000"
      }
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image]);

  return null;
};

export default SEO;