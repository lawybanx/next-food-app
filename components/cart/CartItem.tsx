import { CartItem } from '@/lib/features/cart/cartSlice';
import Image from 'next/image';
import CartFunctions from './CartFunctions';

interface CartItemProps {
  item: CartItem;
}

export default function CartItem({ item }: CartItemProps) {
  const { id, img, dsc, price, quantity } = item;

  return (
    <div className='flex py-5'>
      <Image src={img} alt='food image' width={70} height={60} unoptimized />

      <div className='space-y-1 px-1 w-full'>
        <h3>{dsc}</h3>
        <p className='font-bold text-orange-500'>${price}</p>
        <CartFunctions id={id} quantity={quantity}/>
      </div>
    </div>
  );
}
