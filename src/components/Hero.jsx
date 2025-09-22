import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
        color: 0x1e3a8a, // Tailwind blue-900
        shininess: 50,
        waveHeight: 15,
        waveSpeed: 1.0,
        zoom: 0.9,
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === "function") {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <section
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen text-white overflow-hidden"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            There Tech Ltd
          </h1>

          <p className="mt-4 text-lg md:text-xl font-light text-gray-200">
            Empowering the next generation of{" "}
            <span className="font-semibold text-blue-400">builders</span>,{" "}
            <span className="font-semibold text-blue-400">problem-solvers</span>, 
            and <span className="font-semibold text-blue-400">tech leaders</span>.
          </p>

          <p className="mt-4 text-gray-300">
            Rwandan tech company on a mission to help people and businesses level
            up through smart, modern and innovative solutions.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/Services"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-transform transform hover:scale-105 shadow-lg"
            >
              Our Services
            </Link>
            <Link
              to="/Contact"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 hover:bg-gray-100 font-medium transition-transform transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {["IoT", "AI", "Cloud", "Mobile", "Web", "Data"].map((tech) => (
            <div
              key={tech}
              className="px-6 py-4 bg-white/10 backdrop-blur-md rounded-lg font-semibold hover:bg-blue-600/30 transition transform hover:scale-110 cursor-pointer shadow-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
