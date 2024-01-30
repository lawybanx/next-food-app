'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function MenuImage({ image }: { image: string }) {
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className='bg-slate-100'>
      <Image
        src={image}
        alt='food image'
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
