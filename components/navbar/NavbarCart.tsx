'use client';
import { ShoppingCart } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import { Sheet, SheetTrigger } from '../ui/sheet';
import Cart from '../cart/Cart';

export default function NavbarCart() {
  const quantity = useAppSelector(state => state.cart.totalItems);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className='relative cursor-pointer'>
          <ShoppingCart />
          <div className='absolute -top-2 -right-2 w-5 h-5 rounded-lg bg-white text-orange-500 flex items-center justify-center text-xs'>
            {quantity}
          </div>
        </div>
      </SheetTrigger>
      <Cart />
    </Sheet>
  );
}
