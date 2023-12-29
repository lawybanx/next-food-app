import { Suspense } from 'react';
import FoodList from '@/components/FoodList';

export default function Home() {
  return (
    <main className='pt-20'>
      <h1>Hello World</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <FoodList category='steaks' />
      </Suspense>
    </main>
  );
}
