import { useState } from "react";
import { Lightbulb, ChevronDown } from "lucide-react";

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

  const handleFaqHover = (faqId) => {
    setActiveFaq(faqId);
  };

  const handleFaqLeave = () => {
    setActiveFaq(null);
  };

  const toggleFaq = (faqId) => {
    setActiveFaq(activeFaq === faqId ? null : faqId);
  };
  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-blue-500 mr-4"></div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              FAQ
            </span>
            <div className="w-12 h-1 bg-blue-500 ml-4"></div>
          </div>

          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hover over any question to see the answer instantly. Click to keep
            it open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="group relative bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-blue-200"
              onMouseEnter={() => handleFaqHover(faq.id)}
              onMouseLeave={handleFaqLeave}
              onClick={() => toggleFaq(faq.id)}
            >
              <div
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeFaq === faq.id ? "bg-blue-50/50" : "hover:bg-blue-50/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${
                        activeFaq === faq.id
                          ? "bg-blue-100 text-blue-600"
                          : "bg-blue-50 text-blue-500 group-hover:bg-blue-100"
                      }`}
                    >
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      activeFaq === faq.id
                        ? "rotate-180 text-blue-600"
                        : "text-gray-400 group-hover:text-blue-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Answer Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeFaq === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2 border-t border-blue-100/50">
                  <div className="flex">
                    <div className="w-1 bg-gradient-to-b from-blue-200 to-purple-200 rounded-full mr-4"></div>
                    <p className="text-gray-600 leading-relaxed text-sm pl-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover indicator */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                  activeFaq === faq.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
