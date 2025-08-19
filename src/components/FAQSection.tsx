import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this image converter really free?",
      answer: "Yes, absolutely! Our image converter is 100% free with no hidden costs, no registration required, and no limitations on the number of conversions. We believe everyone should have access to high-quality image conversion tools."
    },
    {
      question: "Are my images safe and private?",
      answer: "Your privacy is our top priority. All image conversions happen directly in your browser using client-side processing. Your images never leave your device or get uploaded to our servers, ensuring complete privacy and security."
    },
    {
      question: "What image formats do you support?",
      answer: "We support all major image formats including JPG/JPEG, PNG, HEIC/HEIF, WebP, BMP, and TIFF. You can convert between any of these formats with perfect quality preservation."
    },
    {
      question: "Is there a file size limit?",
      answer: "You can convert files up to 50MB each, and process up to 20 files simultaneously. This covers virtually all use cases from web images to high-resolution photography."
    },
    {
      question: "Do you compress or reduce image quality?",
      answer: "No, we maintain the original image quality during conversion. Our advanced algorithms ensure that your images retain their full resolution and quality without any compression or degradation."
    },
    {
      question: "Can I use this on mobile devices?",
      answer: "Yes! Our converter works perfectly on all devices including smartphones, tablets, and desktop computers. The interface is fully responsive and optimized for touch interactions."
    },
    {
      question: "How fast is the conversion process?",
      answer: "Conversions happen instantly in your browser. Since everything is processed locally on your device, there's no waiting for uploads or downloads - just immediate results."
    },
    {
      question: "Do I need to install any software?",
      answer: "No installation required! Our converter works entirely in your web browser. Just visit our website and start converting images immediately - no downloads, no plugins, no hassle."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our image converter
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Convert Your Images?</h3>
          <p className="text-blue-100 mb-6">
            Join millions of users who trust our converter for their image conversion needs
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Start Converting Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;