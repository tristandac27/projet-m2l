import React, { useState } from 'react';
import Layout from './Layout';

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/id/1018/800/400',
      title: 'Image 1',
      description: 'Description de l\'image 1',
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/1015/800/400',
      title: 'Image 2',
      description: 'Description de l\'image 2',
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/1019/800/400',
      title: 'Image 3',
      description: 'Description de l\'image 3',
    },
  ];

  const handlePrevClick = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-screen overflow-hidden">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={`https://picsum.photos/id/${image.id}/800/400`}
            alt={image.title}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">{images[currentImageIndex].title}</h1>
          <p className="text-lg">{images[currentImageIndex].description}</p>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white px-2 py-2 rounded-l"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white px-2 py-2 rounded-r"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>

      <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://picsum.photos/id/1018/400/400" alt="Image 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Image 1</h2>
            <p className="text-gray-700">Description de l'image 1</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://picsum.photos/id/1015/400/400" alt="Image 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Image 2</h2>
            <p className="text-gray-700">Description de l'image 2</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="https://picsum.photos/id/1019/400/400" alt="Image 3" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Image 3</h2>
            <p className="text-gray-700">Description de l'image 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;