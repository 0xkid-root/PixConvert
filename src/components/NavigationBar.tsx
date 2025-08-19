import React from 'react';
import { FileImage } from 'lucide-react';
import { ConversionType } from '../types';

interface NavigationBarProps {
  currentConversion: ConversionType;
  onConversionChange: (conversion: ConversionType) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ 
  currentConversion, 
  onConversionChange 
}) => {
  const conversions: ConversionType[] = [
    'JPG to PNG',
    'PNG to JPG', 
    'HEIC to JPG',
    'WebP to JPEG',
    'BMP to PNG',
    'TIFF to JPG'
  ];

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <FileImage className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-blue-500">
              {currentConversion}
            </h1>
          </div>

          {/* Navigation Buttons */}
          <nav className="flex items-center space-x-2">
            {conversions.map((conversion) => (
              <button
                key={conversion}
                onClick={() => onConversionChange(conversion)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-colors duration-200
                  ${currentConversion === conversion
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                  }
                `}
              >
                {conversion}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;