'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MenuImageProps {
  image: string;
  alt: string;
}

export default function MenuImage({ image, alt }: MenuImageProps) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className='bg-muted animate-pulse'>
      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        onLoad={handleImageLoad}
        unoptimized
        className={`transition-opacity duration-300 ${
          imageLoading ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
}
