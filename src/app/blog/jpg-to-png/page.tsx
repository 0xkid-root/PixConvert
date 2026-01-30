'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { ConversionType } from '@/types';

export const metadata: Metadata = {
  title: 'JPG to PNG Conversion Guide - High-Quality Image Conversion',
  description: 'Learn how to convert JPG to PNG with our free online tool. Understand the benefits of PNG format, quality preservation, and when to use each format.',
  keywords: 'jpg to png converter, free jpg to png, online image converter, png format, image quality',
  openGraph: {
    title: 'JPG to PNG Conversion Guide - High-Quality Image Conversion',
    description: 'Learn how to convert JPG to PNG with our free online tool. Understand the benefits of PNG format, quality preservation, and when to use each format.',
    type: 'article',
    url: 'https://cloudeconvert.vercel.app/blog/jpg-to-png',
  },
  alternates: {
    canonical: 'https://cloudeconvert.vercel.app/blog/jpg-to-png',
  }
};

export default function JpgToPngArticle() {
  const currentConversion: ConversionType = 'JPG to PNG';

  const handleConversionChange = (conversion: ConversionType) => {
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
          <h1 className="text-3xl font-bold text-gray-900">JPG to PNG Conversion Guide</h1>
          <Link
            href="/blogs"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Back to Blogs
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose max-w-none">
            <h2>What is JPG to PNG Conversion?</h2>
            <p>
              Converting JPG to PNG is a common requirement when you need lossless compression and 
              transparency support. While JPG is excellent for photographs, PNG is better suited for 
              graphics, logos, and images requiring transparency.
            </p>
            
            <h2>Why Convert JPG to PNG?</h2>
            <ul>
              <li>Lossless compression preserves image quality</li>
              <li>Support for transparency</li>
              <li>Better for graphics, screenshots, and text-based images</li>
              <li>No compression artifacts</li>
            </ul>
            
            <h2>How to Convert JPG to PNG</h2>
            <p>
              Using our CloudConvert tool to convert JPG files to PNG format is simple:
            </p>
            <ol>
              <li>Upload your JPG file using the converter</li>
              <li>Select "JPG to PNG" as the conversion type</li>
              <li>Click convert and download your new PNG file</li>
            </ol>
            
            <h2>Quality Considerations</h2>
            <p>
              When converting from JPG to PNG, the process is generally lossless since PNG supports 
              lossless compression. However, any compression artifacts already present in the JPG 
              will remain in the PNG file.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}