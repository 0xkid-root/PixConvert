import React from 'react';
import { FileImage, Heart, Shield, Zap, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <FileImage className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold">ImageConverter Pro</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The world's most trusted image converter. Fast, secure, and completely free. 
              Convert between any image format with perfect quality preservation.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-gray-300">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-gray-300">Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Works Everywhere</span>
              </div>
            </div>
          </div>

          {/* Supported Formats */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Supported Formats</h4>
            <ul className="space-y-2 text-gray-300">
              <li>JPG to PNG</li>
              <li>PNG to JPG</li>
              <li>HEIC to JPG</li>
              <li>WebP to JPEG</li>
              <li>BMP to PNG</li>
              <li>TIFF to JPG</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Why Choose Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>✓ No Registration Required</li>
              <li>✓ Unlimited Conversions</li>
              <li>✓ Batch Processing</li>
              <li>✓ Perfect Quality</li>
              <li>✓ Mobile Friendly</li>
              <li>✓ 100% Private & Secure</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-gray-300">Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span className="text-gray-300">for image conversion enthusiasts worldwide</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 ImageConverter Pro. All rights reserved.
            </div>
          </div>
        </div>

        {/* Trust Badges */}

      </div>
    </footer>
  );
};

export default Footer;