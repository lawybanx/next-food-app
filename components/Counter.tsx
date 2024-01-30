'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
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
