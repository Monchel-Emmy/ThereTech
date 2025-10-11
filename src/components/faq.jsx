import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFaq(faq.id)}
                onMouseEnter={() => setActiveFaq(faq.id)}
                onMouseLeave={() => setActiveFaq(null)}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    activeFaq === faq.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeFaq === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;