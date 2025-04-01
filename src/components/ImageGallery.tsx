import React from 'react';

const images = [
  '/images/Screenshot 2025-04-01 080019.png',
  '/images/Screenshot 2025-04-01 080048.png',
  '/images/Screenshot 2025-04-01 080100.png',
  '/images/Screenshot 2025-04-01 080119.png',
  '/images/Screenshot 2025-04-01 080134.png',
  '/images/Screenshot 2025-04-01 080153.png',
];

const ImageGallery = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">TM Breads and Pastries Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={image}
              alt={`TM Breads and Pastries ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery; 