import  { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window?.VANTA && heroRef.current) {
      const effect = window.VANTA.WAVES({
        el: heroRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">There Tech Ltd</span>
          </h1>
          <p className="hero-subtitle">
            Empowering the next generation of builders, problem-solvers, and tech leaders
          </p>
          <p className="hero-description">
            Rwandan tech company on a mission to help people and businesses level up through smart, 
            modern and innovative solutions.
          </p>
          <div className="hero-buttons">
            <Link to="/Services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/Contact" className="btn btn-secondary">
              Get Started
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="tech-grid">
            <div className="tech-item">IoT</div>
            <div className="tech-item">AI</div>
            <div className="tech-item">Cloud</div>
            <div className="tech-item">Mobile</div>
            <div className="tech-item">Web</div>
            <div className="tech-item">Data</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 