import Image from 'next/image';
import pattern from '@/components/icons/food-pattern-2.jpg';

export default function AppBackground() {
  return (
    <Image
      src={pattern}
      alt={'background image'}
      fill
      className=' bg-repeat-y min-h-screen'
      style={{
        objectFit: 'cover',
        zIndex: -1,
        backgroundRepeat: 'repeat-y',
      }}
    />
  );
}
