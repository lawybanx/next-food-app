import MenuCarousel from '@/components/MenuCarousel';

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenuCarousel />
      <div className='pt-20'>{children}</div>
    </>
  );
}
