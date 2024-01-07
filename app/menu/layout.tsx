import MenuCarousel from '@/components/MenuCarousel';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className='text-4xl text-center p-5'>Our Menu</h1>
      <MenuCarousel />
      <div className='pt-20'>{children}</div>
    </>
  );
}
