// ParticleComponent.js
import React, { useEffect } from 'react';

const ParticleComponent = () => {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: {
          value: 50,
        },
        size: {
          value: 3,
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse',
          },
        },
      },
    });
  }, []);

  return (
    <div id="particles-js" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
  );
};

export default ParticleComponent;



