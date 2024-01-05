import { Suspense } from 'react';
import FoodList from '@/components/FoodList';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <FoodList category='best-foods' />
      </Suspense>
    </main>
  );
}
