import MenuCarousel from '@/components/menu/MenuCarousel';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='mx-auto w-full max-w-7xl'>
      <h1 className='text-4xl text-center p-5'>Our Menu</h1>
      <div className=' mx-7 md:mx-0'>
        <MenuCarousel />
      </div>
      <div className='pt-10'>{children}</div>
    </section>
  );
}
