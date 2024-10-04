import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import asset2 from '../public/triangle.svg'
import asset3 from '../public/triangle2.svg'

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState('');

  useEffect(() => {
    if (nextIndex !== null) {
      const timer = setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex(null);
      }, 300); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [nextIndex]);

  if (!images || images.length === 0) {
    return <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center">No images available</div>;
  }

  const slide = (newIndex: number , newDirection: React.SetStateAction<string>) => {
    setNextIndex(newIndex);
    setDirection(newDirection);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    slide(newIndex, 'left');
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    slide(newIndex, 'right');
  };

  const goToSlide = (index:number) => {
    if (index === currentIndex) return;
    slide(index, index > currentIndex ? 'right' : 'left');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative w-full h-[300px] mb-4 overflow-hidden">
        <div
          className={`absolute w-full h-full transition-transform duration-300 ease-in-out ${
            nextIndex !== null ? (direction === 'right' ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'
          }`}
          style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {nextIndex !== null && (
          <div
            className={`absolute w-full h-full transition-transform duration-300 ease-in-out ${
              direction === 'right' ? 'translate-x-full' : '-translate-x-full'
            }`}>
                <Image src={images[currentIndex]} alt="slide" />
          </div>
        )}
        <button 
          className="absolute top-1/2 -translate-y-1/2 left-2 z-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity hover:bg-black/40" 
          onClick={goToPrevious}
        >
          <Image src={asset3} alt="left" />
        </button>
        <button 
          className="absolute top-1/2 -translate-y-1/2 right-2 z-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity hover:bg-black/40" 
          onClick={goToNext}
        >
          <Image src={asset2} alt="right" />
        </button>
      </div>
      <div className="flex justify-center space-x-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-16 h-16 bg-center bg-cover cursor-pointer transition-all ${
              index === currentIndex ? 'border-2 border-blue-500 scale-110' : 'opacity-70 hover:opacity-100'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;