import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center py-5 justify-evenly space-x-4 lg:space-x-6 bg-orange-500 text-white w-full fixed top-0 z-[999] backdrop-blur '>
      <h1 className='justify-start'>Brand Logo</h1>
      <div className='flex px-14'>
        <Link
          href='/'
          className='px-8 hover:bg-accent hover:text-accent-foreground'
        >
          Home
        </Link>
        <Link
          href='/menu'
          className='px-8 hover:bg-accent hover:text-accent-foreground'
        >
          Menu
        </Link>
        <Link
          href='/about'
          className='px-8 hover:bg-accent hover:text-accent-foreground'
        >
          About
        </Link>
      </div>
      <div>
        <span>🔍</span>
        <span>🛒</span>
        <span>👨🏾‍💻</span>
      </div>
    </nav>
  );
}
 