import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function MenuSkeleton() {
  return (
    <div className='flex flex-wrap gap-5 justify-center'>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className='flex flex-col items-center space-y-4'>
          <Skeleton className='w-[280px] h-[256px]' />
          <Skeleton className='h-[20px] w-[280px]' />
          <Skeleton className='h-[20px] w-[280px]' />
          <div className='flex justify-between w-full'>
            <Skeleton className='h-[30px] w-20' />
            <Skeleton className='h-[30px] w-20' />
          </div>
        </div>
      ))}
    </div>
  );
}
