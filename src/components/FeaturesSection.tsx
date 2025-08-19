import React from 'react';
import { Shield, Zap, Globe, Star, CheckCircle, Users, Clock, Award } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "100% Secure & Private",
      description: "All conversions happen in your browser. Your files never leave your device, ensuring complete privacy and security."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Lightning Fast",
      description: "Convert images instantly with our optimized algorithms. No waiting, no delays - just immediate results."
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Works Everywhere",
      description: "Compatible with all modern browsers and devices. Convert images on desktop, tablet, or mobile seamlessly."
    },
    {
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: "Premium Quality",
      description: "Maintain original image quality with our advanced conversion technology. No compression, no quality loss."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      title: "No Registration",
      description: "Start converting immediately. No sign-ups, no accounts, no personal information required."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Batch Processing",
      description: "Convert multiple images at once. Save time by processing up to 20 files simultaneously."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-600" />,
      title: "24/7 Available",
      description: "Convert images anytime, anywhere. Our service is always online and ready to use."
    },
    {
      icon: <Award className="w-8 h-8 text-red-600" />,
      title: "Industry Leading",
      description: "Trusted by millions worldwide. The most reliable and feature-rich image converter available."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Our Image Converter?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most advanced, secure, and user-friendly image converter on the web. 
            Here's what makes us the best choice for your image conversion needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supported Formats */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Supported Image Formats
            </h3>
            <p className="text-lg text-gray-600">
              Convert between all popular image formats with perfect quality preservation
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['JPG', 'PNG', 'HEIC', 'WebP', 'BMP', 'TIFF'].map((format) => (
              <div key={format} className="bg-white p-4 rounded-lg border border-gray-200 text-center hover:border-blue-300 transition-colors duration-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">.{format}</div>
                <div className="text-sm text-gray-600">Supported</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;