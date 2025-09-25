import { useEffect, useRef, useState } from "react";
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
        minHeight: 50.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1e40af,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 1.0,
        zoom: 0.95,
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
      className="relative flex items-center justify-center h-180 text-white overflow-hidden"
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-blue-900/70 z-0"></div>

     
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
       
        <div className="text-center lg:text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-white">There </span>
            <span className="text-blue-900">Tech Ltd</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
            Empowering the next generation of{" "}
            <span className="text-blue-900 font-semibold">builders</span>,{" "}
            <span className="text-blue-900 font-semibold">problem-solvers</span>,
            and <span className="text-blue-900 font-semibold">tech leaders</span>.
          </p>

          <p className="mt-4 text-white">
            We’re a Rwandan tech company on a mission to help people and
            businesses level up through smart, modern, and innovative solutions.
          </p>

         
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/Services"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold transition-transform transform hover:scale-105 shadow-lg"
            >
              Our Services
            </Link>
            <Link
              to="/Contact"
              className="px-8 py-4 rounded-lg bg-white text-blue-700 hover:bg-gray-100 font-semibold transition-transform transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>

     
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
          {["IoT", "AI", "Cloud", "Mobile", "Web", "Data"].map((tech) => (
            <div
              key={tech}
              className="px-8 py-6 bg-white/40 backdrop-blur-md rounded-xl font-semibold text-lg hover:bg-blue-900/40 transition transform hover:scale-110 cursor-pointer shadow-md"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

     
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-900/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
