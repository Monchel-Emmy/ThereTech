import { useState } from "react";
import { useContact } from "../hooks/useApiQuery";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  ArrowRight,
  Hexagon,
  Circle,
  ServerIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "../components/faq";

const Contact = () => {
  const { data, isLoading, error } = useContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
    budget: "not-sure",
    timeline: "not-sure",
  });
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [activeFaq, setActiveFaq] = useState(null);

  // Fallback data if API fails
  const fallbackContact = {
    companyInfo: {
      name: "There-Tech",
      address: {
        street: "1 KN 78 St, Kigali",
        city: "Kigali City",
        state: "Kigali",
        zipCode: "00000",
        country: "Rwanda",
      },
      phone: "+250 782 419 365",
      email: "theretech250@gmail.com",
      website: "https://theretech.rw",
    },
    socialMedia: {
      linkedin: "https://www.linkedin.com/company/there-tech-ltd",
      github: "https://github.com/theretech",
      twitter: "https://twitter.com/theretech",
    },
    officeHours: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "9:00 AM - 6:00 PM",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
  };

  // Use API data if available, otherwise fallback
  const contactData = data?.contact || fallbackContact;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: "loading", message: "Sending message..." });

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_API_URL ||
          "https://there-tech-backend.onrender.com/api"
        }/contact/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          service: "",
          budget: "not-sure",
          timeline: "not-sure",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
      });
      console.log(error);
    }
  };

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What types of projects do you work on?",
      answer:
        "We work on a wide range of projects including IoT solutions, custom software development, mobile apps, web applications, and student project support. No project is too small or too complex.",
    },
    {
      id: 2,
      question: "Do you work with students?",
      answer:
        "Absolutely! We specialize in helping students turn their academic projects into functional prototypes. We provide mentorship, technical guidance, and development support.",
    },
    {
      id: 3,
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on complexity. Small projects can take 2-4 weeks, while larger applications may take 2-6 months. We always provide detailed timelines during our initial consultation.",
    },
    {
      id: 4,
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer ongoing support and maintenance for all our projects. We believe in building long-term relationships with our clients.",
    },
    {
      id: 5,
      question: "What technologies do you specialize in?",
      answer:
        "We work with modern technologies including React, Node.js, Python, IoT platforms, mobile development (React Native, Flutter), and cloud services like AWS and Azure.",
    },
    {
      id: 6,
      question: "How do you handle project pricing?",
      answer:
        "We provide transparent pricing based on project requirements. We offer fixed-price projects for well-defined scopes and hourly rates for ongoing work. Every project starts with a free consultation.",
    },
  ];

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId);
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-slate-50 to-blue-100">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-300 to-indigo-400">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-40 h-40 md:w-80 md:h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 md:-bottom-40 md:-right-40 w-48 h-48 md:w-96 md:h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 md:h-64 bg-blue-600/10 rounded-full blur-[100px]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-6 md:mb-8 px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 flex-shrink-0" />
              <span className="font-semibold text-xs md:text-sm uppercase tracking-widest">
                Get In Touch
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-black mb-6 md:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                Let's Start
              </span>
              Your Project
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16 px-2 sm:px-4">
              Ready to level up your business or project? Let's work together to
              bring your ideas to life with cutting-edge solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 px-4">
              {/* Primary Button */}
              <Link
                to="/About"
                className="group relative overflow-hidden w-full sm:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-white text-blue-900 font-bold rounded-full transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl min-w-[200px] text-center"
              >
                <span className="relative z-10 flex items-center justify-center text-sm md:text-base lg:text-lg">
                  About Us
                  <ServerIcon className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
        
              </Link>

              {/* Secondary Button */}
              <Link
                to="/services"
                className="group w-full sm:w-auto px-6 md:px-8 lg:px-10 py-3 md:py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl min-w-[200px] text-center"
              >
                <span className="flex items-center justify-center text-sm md:text-base lg:text-lg">
                  Our Services
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>

          
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-8 left-4 md:bottom-10 md:left-10 animate-float">
          <Hexagon className="w-6 h-6 md:w-8 md:h-8 text-blue-300/40" />
        </div>
        <div className="absolute top-8 right-4 md:top-20 md:right-20 animate-float delay-1000">
          <Circle className="w-5 h-5 md:w-6 md:h-6 text-purple-300/30" />
        </div>
        <div className="absolute top-1/4 left-1/4 animate-float delay-500 hidden md:block">
          <Circle className="w-4 h-4 text-blue-200/20" />
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-12 md:py-20 lg:py-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 mr-3 md:mr-4"></div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs md:text-sm">
                Contact Us
              </span>
              <div className="w-8 md:w-12 h-0.5 bg-blue-500 ml-3 md:ml-4"></div>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base lg:text-lg">
              We're here to help you bring your ideas to life. Get in touch with
              us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              <div className="grid grid-cols-1 gap-3 md:gap-4 lg:gap-5">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: contactData.companyInfo.phone,
                    color: "from-green-500 to-green-600",
                    link: `tel:${contactData.companyInfo.phone}`,
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: contactData.companyInfo.email,
                    color: "from-blue-500 to-blue-600",
                    link: `mailto:${contactData.companyInfo.email}`,
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: `${contactData.companyInfo.address.street}, ${contactData.companyInfo.address.city}`,
                    color: "from-purple-500 to-purple-600",
                    link: "https://maps.google.com",
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    content: "Mon - Fri: 9:00 AM - 6:00 PM",
                    color: "from-orange-500 to-orange-600",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  const Content = item.link ? (
                    <a
                      href={item.link}
                      className="hover:text-blue-600 transition-colors duration-200"
                      target={item.link.startsWith("http") ? "_blank" : "_self"}
                      rel={
                        item.link.startsWith("http")
                          ? "noopener noreferrer"
                          : ""
                      }
                    >
                      {item.content}
                    </a>
                  ) : (
                    <span>{item.content}</span>
                  );

                  return (
                    <div
                      key={index}
                      className="bg-white/80 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-5">
                        <div
                          className={`w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${item.color} rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0`}
                        >
                          <IconComponent className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-900 text-sm md:text-base lg:text-lg">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-xs md:text-sm lg:text-base truncate">
                            {Content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="bg-white/60 backdrop-blur-md rounded-xl md:rounded-2xl p-4 md:p-6 border border-blue-100/50">
                <h3 className="font-bold text-gray-900 mb-3 text-sm md:text-base lg:text-lg">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-xs md:text-sm lg:text-base text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Fast response time (within 24 hours)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Free initial consultation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Student-friendly pricing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Ongoing support & maintenance
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div
              id="contact-form"
              className="bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl border border-blue-100/50"
            >
              <div className="flex items-center mb-4 md:mb-6 lg:mb-8">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <Send className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6 lg:space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                  <div className="form-group">
                    <label
                      htmlFor="phone"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="+250 XXX XXX XXX"
                    />
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="subject"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                  <div className="form-group">
                    <label
                      htmlFor="service"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-apps">Mobile Apps</option>
                      <option value="iot-solutions">IoT Solutions</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="student-support">Student Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="budget"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                    >
                      <option value="not-sure">Not sure</option>
                      <option value="under-200k">Under 200,000 FRW</option>
                      <option value="200k-400k">
                        200,001 FRW - 400,000 FRW
                      </option>
                      <option value="400k-700k">
                        400,001 FRW - 700,000 FRW
                      </option>
                      <option value="700k-1000M">
                        700,001 FRW- 1,000,000 FRW
                      </option>
                      <option value="1M+">1,000,000+ FRW</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="timeline"
                    className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                  >
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white/50"
                  >
                    <option value="not-sure">Not sure</option>
                    <option value="asap">ASAP</option>
                    <option value="1-2-weeks">1-2 weeks</option>
                    <option value="1-2-months">1-2 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-months+">6+ months</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical bg-white/50"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  ></textarea>
                </div>

                {submitStatus.message && (
                  <div
                    className={`p-3 md:p-4 rounded-lg text-sm md:text-base ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : submitStatus.type === "error"
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 md:py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 md:hover:-translate-y-1 shadow-lg hover:shadow-xl text-sm md:text-base lg:text-lg"
                  disabled={submitStatus.type === "loading"}
                >
                  {submitStatus.type === "loading" ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 md:h-5 md:w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <Send className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-enter {
          animation: fadeIn 0.3s ease-out;
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Contact;
