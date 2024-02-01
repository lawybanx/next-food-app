'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface CounterProps {
  count: number;
}

const Counter = ({ count }: CounterProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='flex items-center border rounded-md shadow-md p-1'>
      <button onClick={handleDecrement}>
        <ChevronDown className='px-1' />
      </button>
      <span className='px-1 text-orange-500 font-medium'>{count}</span>
      <button onClick={handleIncrement} className=''>
        <ChevronUp className='px-1' />
      </button>
    </div>
  );
};

export default Counter;
