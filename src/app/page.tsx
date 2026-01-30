import { Metadata } from 'next';
import ImageConverter from '@/components/ImageConverter';

export const metadata: Metadata = {
  title: 'CloudConvert - Free Online Image Converter | JPG, PNG, WebP, HEIC, BMP, TIFF',
  description: 'Convert images between any format instantly. Fast, secure, and completely free. No registration required, no watermarks, unlimited conversions.',
  keywords: 'image converter, jpg to png, png to jpg, webp converter, heic converter, bmp converter, tiff converter, free image converter, online image converter',
  openGraph: {
    title: 'CloudConvert - Free Online Image Converter',
    description: 'Convert images between any format instantly. Fast, secure, and completely free.',
    type: 'website',
    url: 'https://cloudeconvert.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudConvert - Free Online Image Converter',
    description: 'Convert images between any format instantly. Fast, secure, and completely free.',
  },
  alternates: {
    canonical: 'https://cloudeconvert.vercel.app',
  }
};

export default function HomePage() {
  return <ImageConverter />;
}