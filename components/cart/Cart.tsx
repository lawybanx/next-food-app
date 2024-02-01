'use client';
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { Button } from '../ui/button';
import { ShoppingBagIcon, X } from 'lucide-react';
import { useAppSelector } from '@/lib/hooks';
import CartItem from './CartItem';

export default function Cart() {
  const { items, totalItems, totalPrice } = useAppSelector(state => state.cart);

  return (
    <SheetContent className='z-[999] overflow-y-scroll'>
      <SheetHeader>
        <SheetTitle className='flex items-end justify-between'>
          <div className='flex space-x-2 text-xl'>
            <h3>Cart</h3>
            <span>({totalItems})</span>
          </div>
          <SheetClose>
            <X className='h-7 w-7' />
          </SheetClose>
        </SheetTitle>
        {/* <SheetDescription>Below are your Cart Items</SheetDescription> */}
      </SheetHeader>
      {items.map((item, _) => (
        <CartItem key={_} item={item} />
      ))}
      {/* total price */}
      <SheetFooter>
        <SheetClose asChild>
          <Button className='flex w-full text-lg'>
            <ShoppingBagIcon className='mr-1' />
            Checkout
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
