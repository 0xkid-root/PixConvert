// src/components/BMPConversionsArticle.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { ConversionType } from '../types';

const BMPConversionsArticle: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">BMP Conversion Guide</h1>
          <button 
            onClick={() => navigate('/blogs')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Back to Blogs
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h2>What is BMP?</h2>
            <p>
              BMP (Bitmap) is a raster graphics image file format used to store bitmap digital images. 
              BMP files are uncompressed or compressed with lossless compression, resulting in large file sizes.
            </p>
            
            <h2>Why Convert BMP Files?</h2>
            <p>
              BMP files are typically very large and not suitable for web use. Converting BMP files to 
              more efficient formats like JPG, PNG, or WebP offers several benefits:
            </p>
            <ul>
              <li>Significantly smaller file sizes</li>
              <li>Better web compatibility</li>
              <li>Improved loading times</li>
              <li>Reduced storage requirements</li>
            </ul>
            
            <h2>Supported BMP Conversions</h2>
            <p>
              Our CloudConvert tool supports converting BMP files to popular formats:
            </p>
            <ul>
              <li>BMP to JPG - For photographs and images with many colors</li>
              <li>BMP to PNG - For graphics and images requiring transparency</li>
              <li>BMP to WebP - For modern web use with optimal compression</li>
            </ul>
            
            <h2>How to Convert BMP Files</h2>
            <p>
              Converting BMP files with our tool is straightforward:
            </p>
            <ol>
              <li>Upload your BMP file using the converter</li>
              <li>Select your desired output format (e.g., "BMP to PNG")</li>
              <li>Click convert and download your new file</li>
            </ol>
            
            <h2>Quality Considerations</h2>
            <p>
              Since BMP files are typically uncompressed, converting them to JPG may result in some 
              quality loss due to JPG's lossy compression. Converting to PNG or WebP will maintain 
              image quality while reducing file size.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BMPConversionsArticle;