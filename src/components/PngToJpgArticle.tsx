// src/components/PngToJpgArticle.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { ConversionType } from '../types';

const PngToJpgArticle: React.FC = () => {
  const navigate = useNavigate();
  // Mock current conversion for the navigation bar
  const currentConversion: ConversionType = 'JPG to PNG';
  
  const handleConversionChange = (conversion: ConversionType) => {
    // In a real app, you might want to navigate to the main app with the selected conversion
    console.log('Conversion changed to:', conversion);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavigationBar 
        currentConversion={currentConversion}
        onConversionChange={handleConversionChange}
      />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">PNG to JPG Conversion Guide</h1>
          <button 
            onClick={() => navigate('/blogs')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Back to Blogs
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h2>What is PNG to JPG Conversion?</h2>
            <p>
              PNG (Portable Network Graphics) and JPG (Joint Photographic Experts Group) are two of the most 
              commonly used image formats. While PNG supports transparency and lossless compression, JPG uses 
              lossy compression which results in smaller file sizes.
            </p>
            
            <h2>Why Convert PNG to JPG?</h2>
            <ul>
              <li>Smaller file sizes for web use</li>
              <li>Better compatibility with older systems</li>
              <li>Reduced storage requirements</li>
              <li>Improved loading times on websites</li>
            </ul>
            
            <h2>How to Convert PNG to JPG</h2>
            <p>
              Our CloudConvert tool makes it easy to convert PNG files to JPG format:
            </p>
            <ol>
              <li>Upload your PNG file using the converter</li>
              <li>Select "PNG to JPG" as the conversion type</li>
              <li>Click convert and download your new JPG file</li>
            </ol>
            
            <h2>Quality Considerations</h2>
            <p>
              When converting from PNG to JPG, keep in mind that JPG uses lossy compression. This means 
              some image quality may be lost, especially in areas with sharp contrasts or text. However, 
              for photographs and complex images, the difference is often negligible.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PngToJpgArticle;