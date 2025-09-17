import React, { useState } from 'react';
import { Upload, Download, Trash2 } from 'lucide-react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FileUploadZone from './components/FileUploadZone';
import ConversionProgress from './components/ConversionProgress';
import ConversionResults from './components/ConversionResults';
import NavigationBar from './components/NavigationBar';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { ConvertedFile, ConversionType } from './types';

import BlogCards from './components/BlogCards';

// Article components
import PngToJpgArticle from './components/PngToJpgArticle';
import JpgToPngArticle from './components/JpgToPngArticle';
import WebPConversionsArticle from './components/WebPConversionsArticle';
import BMPConversionsArticle from './components/BMPConversionsArticle';

import CloudeConvertArticle from './components/CloudeConvertArticle'; // New import


// Main app content (image converter)
const ImageConverter: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentConversion, setCurrentConversion] = useState<ConversionType>('JPG to PNG');
  const navigate = useNavigate();

  const handleFilesSelect = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    setConvertedFiles([]);
    setProgress(0);
  };

  const handleConversionTypeChange = (conversionType: ConversionType) => {
    setCurrentConversion(conversionType);
    setFiles([]);
    setConvertedFiles([]);
    setProgress(0);
  };

  const clearQueue = () => {
    setFiles([]);
    setConvertedFiles([]);
    setProgress(0);
  };

  const convertFiles = async () => {
    if (files.length === 0) return;

    setIsConverting(true);
    setProgress(0);
    const results: ConvertedFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setProgress(((i + 1) / files.length) * 100);

      try {
        const convertedBlob = await convertImage(file, currentConversion);
        const extension = getTargetExtension(currentConversion);
        const convertedFile = new File([convertedBlob], 
          file.name.replace(/\.[^/.]+$/, `.${extension}`), {
          type: `image/${extension}`
        });

        results.push({
          originalFile: file,
          convertedFile: convertedFile,
          downloadUrl: URL.createObjectURL(convertedBlob),
          status: 'success'
        });
      } catch (error) {
        results.push({
          originalFile: file,
          convertedFile: null,
          downloadUrl: null,
          status: 'error',
          error: 'Conversion failed'
        });
      }
    }

    setConvertedFiles(results);
    setIsConverting(false);
  };

  const getTargetExtension = (conversionType: ConversionType): string => {
    const mapping: Record<ConversionType, string> = {
      'JPG to PNG': 'png',
      'PNG to JPG': 'jpg',
      'HEIC to JPG': 'jpg',
      'WebP to JPEG': 'jpg',
      'BMP to PNG': 'png',
      'TIFF to JPG': 'jpg'
    };
    return mapping[conversionType];
  };

  const convertImage = (file: File, conversionType: ConversionType): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        
        if (ctx) {
          // For JPG conversion, fill with white background
          if (conversionType.includes('JPG')) {
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }
          
          ctx.drawImage(img, 0, 0);
          
          const targetFormat = getTargetExtension(conversionType);
          const mimeType = targetFormat === 'jpg' ? 'image/jpeg' : `image/${targetFormat}`;
          
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new Error('Failed to convert image'));
            }
          }, mimeType, 0.9);
        } else {
          reject(new Error('Canvas context not available'));
        }
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const downloadAll = () => {
    convertedFiles.forEach((file) => {
      if (file.downloadUrl && file.convertedFile) {
        const link = document.createElement('a');
        link.href = file.downloadUrl;
        link.download = file.convertedFile.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  };

  const reset = () => {
    setFiles([]);
    setConvertedFiles([]);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <NavigationBar 
        currentConversion={currentConversion}
        onConversionChange={(conversion) => {
          handleConversionTypeChange(conversion);
          navigate('/');
        }}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The World's Best <span className="text-blue-600">Image Converter</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Convert images between any format instantly. Fast, secure, and completely free. 
            No registration required, no watermarks, unlimited conversions.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Images Converted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Free Forever</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Format Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">0s</div>
              <div className="text-gray-600">Processing Time</div>
            </div>
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6">
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => document.getElementById('file-input')?.click()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>UPLOAD FILES</span>
            </button>
            <button
              onClick={clearQueue}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Trash2 className="w-5 h-5" />
              <span>CLEAR QUEUE</span>
            </button>
          </div>

          <FileUploadZone 
            onFilesSelect={handleFilesSelect} 
            conversionType={currentConversion}
          />
        </div>

        {/* Files Ready for Conversion */}
        {files.length > 0 && !isConverting && convertedFiles.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">
                {files.length} files ready for conversion
              </span>
              <button
                onClick={convertFiles}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD ALL</span>
              </button>
            </div>
          </div>
        )}

        {/* Conversion Progress */}
        {isConverting && (
          <ConversionProgress progress={progress} totalFiles={files.length} />
        )}

        {/* Conversion Results */}
        {convertedFiles.length > 0 && (
          <ConversionResults 
            convertedFiles={convertedFiles}
            onDownloadAll={downloadAll}
            onReset={reset}
          />
        )}
      </main>

      {/* Features Section */}
      <FeaturesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Blog page component
const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Back to Converter
          </button>
        </div>
        <BlogCards />
      </div>
      <Footer />
    </div>
  );
};

// Main App component with routing
const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ImageConverter />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/png-to-jpg" element={<PngToJpgArticle />} />
        <Route path="/blog/jpg-to-png" element={<JpgToPngArticle />} />
        <Route path="/blog/webp-conversions" element={<WebPConversionsArticle />} />
        <Route path="/blog/bmp-conversions" element={<BMPConversionsArticle />} />
        <Route path="/blogs/cloudeconvert" element={<CloudeConvertArticle />} /> {/* New route */}

      </Routes>
    </div>
  );
};

export default App;