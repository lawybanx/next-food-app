import { CartItem } from '@/lib/features/cart/cartSlice';
import Image from 'next/image';
import Counter from '../Counter';

interface CartItemProps {
  item: CartItem;
}

export default function CartItem({ item }: CartItemProps) {
  const { id, img, dsc, price, quantity, total } = item;

  return (
    <div className='flex'>
      <div>
        <Image src={img} alt='food image' width={100} height={100} unoptimized />
      </div>
      <div>
        <h3>{dsc}</h3>
        <p className='font-bold'>${price}</p>
        <p>Quantity: <Counter count={quantity}/></p>
      </div>
    </div>
  );
}
