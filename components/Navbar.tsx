import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='flex w-full flex-col items-start justify-evenly'>
      <h1>Brand Logo</h1>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/menu'>Menu</Link>
        <Link href='/about'>About</Link>
      </div>
      <div>
        <span>Search Icon</span>
        <span>Cart</span>
        <span>User</span>
      </div>
    </nav>
  );
}
