'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavbarCart from './NavbarCart';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact Us', path: '/contact' },
  ];
  return (
    <nav className='fixed top-0 z-[998] bg-foreground text-white w-full backdrop-blur'>
      <div className='items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
        <div className='flex items-center justify-between py-3 md:py-5 md:block'>
          <div className='flex'>
            <button
              className='p-2 md:hidden'
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu />
            </button>
            <h1 className='text-3xl font-bold'>Logo</h1>
          </div>
          <div className='md:hidden flex space-x-2 mr-3'>
            <span>🔍</span>
            <span>👨🏾‍💻</span>
            <NavbarCart />
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-2 md:block md:pb-0 md:mt-0 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className='justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
            {menus.map((item, _) => (
              <li
                className='px-4 py-1 hover:bg-accent hover:text-accent-foreground'
                key={_}
              >
                <Link href={item.path}>
                  <p>{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden md:flex space-x-2'>
          <span>🔍</span>
          <span>👨🏾‍💻</span>
          <NavbarCart />
        </div>
      </div>
    </nav>
  );
}
