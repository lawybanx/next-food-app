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
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div
      className='relative'
      onMouseEnter={() => setHoveredItemId(id)}
      onMouseLeave={() => setHoveredItemId(null)}
    >
      <Image
        src={img}
        alt={dsc}
        width={500}
        height={500}
        onLoad={handleImageLoad}
        unoptimized
        className={`transition-opacity ${
          imageLoading ? 'bg-slate-200 animate-pulse opacity-0' : 'opacity-100'
        }`}
      />
      {hoveredItemId === id && <MenuItemRatings ratings={rate} />}
    </div>
  );
}
