import Menu from '@/components/Menu';
import { Suspense } from 'react';

export default function Page({ params }: { params: { categories: string } }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <Menu category={params.categories} />
      </Suspense>
    </>
  );
}
