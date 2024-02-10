import DeliveryForm from '@/components/checkout/DeliveryForm';
import React from 'react';

export default function page() {
  return (
    <div className='bg-accent h-screen'>
      <div className='mx-auto w-full max-w-5xl pt-10'>
        <h1>Checkout</h1>
        <div className='flex gap-5 justify-between'>
          <DeliveryForm />
          <section>Right</section>
        </div>
      </div>
    </div>
  );
}
