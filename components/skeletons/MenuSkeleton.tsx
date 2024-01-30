import React from 'react';
import { Skeleton } from '../ui/skeleton';

export default function MenuSkeleton() {
  return (
    <div className='grid sm:grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 place-items-center'>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className='flex flex-col items-center space-y-4'>
          <Skeleton className='h-[348px] w-[348px]' />
          <Skeleton className='h-[20px] w-[348px]' />
          <Skeleton className='h-[20px] w-[348px]' />
          <div className='flex justify-between w-full'>
            <Skeleton className='h-[30px] w-20' />
            <Skeleton className='h-[30px] w-20' />
          </div>
        </div>
      ))}
    </div>
  );
}
