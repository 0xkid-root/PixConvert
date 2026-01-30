import { Metadata } from 'next';
import Link from 'next/link';
import BlogCards from '@/components/BlogCards';
import NavigationBar from '@/components/NavigationBar';
import Footer from '@/components/Footer';
import { ConversionType } from '@/types';

export const metadata: Metadata = {
  title: 'Image Conversion Blog - Tips & Tutorials | CloudConvert',
  description: 'Learn everything about image conversion with our comprehensive guides and tutorials. Expert tips on JPG, PNG, WebP, HEIC, BMP, and TIFF formats.',
  keywords: 'image conversion, jpg to png tutorial, png to jpg guide, webp conversion, heic converter, image format guide',
  openGraph: {
    title: 'Image Conversion Blog - Tips & Tutorials',
    description: 'Expert guides and tutorials on image conversion techniques and best practices.',
    type: 'website',
    url: 'https://cloudeconvert.vercel.app/blogs',
  },
  alternates: {
    canonical: 'https://cloudeconvert.vercel.app/blogs',
  }
};

export default function BlogsPage() {
  // For static blog pages, we'll use a fixed conversion type
  const currentConversion = 'JPG to PNG';

  // Since this is a static page, we don't need interactive conversion changes
  const handleConversionChange = () => {
    // This is just a placeholder since we don't need real interactivity on blog pages
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NavigationBar 
        currentConversion={currentConversion}
        showConversionButtons={false}
      />
      
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Image Conversion Blog
          </h1>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Back to Converter
          </Link>
        </div>
        
        <BlogCards />
      </main>
      
      <Footer />
    </div>
  );
}