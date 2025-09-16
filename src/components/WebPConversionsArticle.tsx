// src/components/WebPConversionsArticle.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { ConversionType } from '../types';

const WebPConversionsArticle: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-gray-900">WebP Conversion Guide</h1>
          <button 
            onClick={() => navigate('/blogs')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Back to Blogs
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h2>What is WebP?</h2>
            <p>
              WebP is a modern image format developed by Google that provides superior lossless and lossy 
              compression for images on the web. WebP images are significantly smaller than their JPG and 
              PNG counterparts, resulting in faster loading websites.
            </p>
            
            <h2>Benefits of WebP</h2>
            <ul>
              <li>Up to 30% smaller file sizes compared to JPG</li>
              <li>Up to 25% smaller file sizes compared to PNG</li>
              <li>Support for both lossy and lossless compression</li>
              <li>Built-in transparency support</li>
              <li>Animation support (like GIF but more efficient)</li>
            </ul>
            
            <h2>Converting to and from WebP</h2>
            <p>
              Our CloudConvert tool supports converting between WebP and other popular formats:
            </p>
            <ul>
              <li>WebP to JPG</li>
              <li>WebP to PNG</li>
              <li>JPG to WebP</li>
              <li>PNG to WebP</li>
            </ul>
            
            <h2>Browser Support</h2>
            <p>
              WebP is supported by all modern browsers including Chrome, Firefox, Safari, and Edge. 
              For older browsers that don't support WebP, you can provide fallback images in JPG or PNG format.
            </p>
            
            <h2>How to Use Our WebP Converter</h2>
            <p>
              Converting images to or from WebP format is simple with our tool:
            </p>
            <ol>
              <li>Upload your image file using the converter</li>
              <li>Select the appropriate conversion type (e.g., "WebP to JPEG")</li>
              <li>Click convert and download your new file</li>
            </ol>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebPConversionsArticle;