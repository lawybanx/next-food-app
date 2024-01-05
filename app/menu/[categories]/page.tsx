import Menu from '@/components/Menu';
import { Suspense } from 'react';

export default function Page({ params }: { params: { categories: string } }) {
  return (
    <div>
      <p className='ml-14'>Categories: {params.categories}</p>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Menu category={params.categories} />
      </Suspense>
    </div>
  );
}
