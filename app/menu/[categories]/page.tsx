import Menu from '@/components/menu/Menu';
import { Suspense } from 'react';
import Loading from '../loading';

export default function page({ params }: { params: { categories: string } }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Menu category={params.categories} />
      </Suspense>
    </>
  );
}
