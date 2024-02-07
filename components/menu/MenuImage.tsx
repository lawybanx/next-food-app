'use client';

import Image from 'next/image';
import { useState } from 'react';
import MenuItemRatings from './MenuItemRatings';

interface MenuImageProps {
  food: { id: string; img: string; dsc: string; rate: number } | any;
}

export default function MenuImage({ food }: MenuImageProps) {
  const { id, img, dsc, rate } = food;

  const [imageLoading, setImageLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div
      className='relative'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={img}
        alt={dsc}
        width={500}
        height={500}
        onLoad={handleImageLoad}
        unoptimized
        className={`transition-opacity  ${
          imageLoading ? 'bg-slate-200 animate-pulse opacity-0' : 'opacity-100'
        }`}
      />
      {isHovered && <MenuItemRatings ratings={rate} />}
    </div>
  );
}
