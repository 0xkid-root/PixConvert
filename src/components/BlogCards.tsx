import React from 'react';
import { Link } from 'react-router-dom';

const BlogCards = () => {
  const blogCards = [
    { title: 'PNG to JPG', description: 'Learn about converting PNG to JPG', link: '/blog/png-to-jpg' },
    { title: 'JPG to PNG', description: 'Learn about converting JPG to PNG', link: '/blog/jpg-to-png' },
    { title: 'WebP Conversions', description: 'Explore WebP format conversions', link: '/blog/webp-conversions' },
    { title: 'BMP Conversions', description: 'Discover BMP format conversions', link: '/blog/bmp-conversions' },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-between items-center mb-10">

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 h-80 w-full flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h2>
              <p className="text-gray-600 text-base leading-relaxed">{card.description}</p>
            </div>
            <Link
              to={card.link}
              className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-5 rounded-md transition duration-200"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;