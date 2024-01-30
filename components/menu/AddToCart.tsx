'use client';
import { useAppDispatch } from '@/lib/hooks';
import { addToCart } from '@/lib/features/cart/cartSlice';
import { Food } from './MenuItem';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

interface AddToCartProps {
  food: { id: string; img: string; dsc: string; price: number };
}

export default function AddToCart({ food }: AddToCartProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = ({ id, img, dsc, price }: Food) => {
    const quantity = 1; // You can set this dynamically based on user input
    dispatch(
      addToCart({
        id,
        img,
        dsc,
        price,
        quantity,
        total: 0,
      })
    );
    toast.success('Item added to cart succesfully');
  };

  return (
    <div>
      <button
        className='flex items-center bg-red-600 shadow-md py-2 px-4 text-white hover:opacity-80'
        onClick={() => handleAddToCart(food)}
      >
        <Plus />
        Add to Cart
      </button>
    </div>
  );
}
