'use client';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useAppDispatch } from '@/lib/hooks';
import {
  increment,
  decrement,
  removeFromCart,
} from '@/lib/features/cart/cartSlice';

interface CartFunctionsProps {
  id: string;
  quantity: number;
}

export default function CartFunctions({ id, quantity }: CartFunctionsProps) {
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  const handleDecrement = () => {
    dispatch(decrement(id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className='flex justify-between'>
      <div className='flex space-x-3 bg-slate-50 w-20 p-1 align-middle'>
        <Minus className='cursor-pointer' onClick={handleDecrement} />
        <span>{quantity}</span>
        <Plus className='cursor-pointer' onClick={handleIncrement} />
      </div>
      <Button onClick={handleRemove} variant={'destructive'}>
        <Trash2 className='w-5 h-5' />
      </Button>
    </div>
  );
}
