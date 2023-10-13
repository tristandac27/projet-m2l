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
    <div>
      <div className="relative">
        <img src={images[currentImageIndex].src} alt={images[currentImageIndex].title} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">{images[currentImageIndex].title}</h1>
          <p className="text-lg">{images[currentImageIndex].description}</p>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-l"
          onClick={handlePrevClick}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-r"
          onClick={handleNextClick}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Home;