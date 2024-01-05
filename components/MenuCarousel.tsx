import Link from 'next/link';

export default function MenuCarousel() {
  const categories = [
    'bbqs',
    'breads',
    'burgers',
    'chocolates',
    'desserts',
    'drinks',
    'fried-chicken',
    'ice-cream',
    'pizzas',
    'porks',
    'sandwiches',
    'sausages',
    'steaks',
  ];

  return (
    <>
      <div className='flex justify-center'>
        {categories.map((category, index) => (
          <div key={index} className='p-2 '>
            <Link href={`/menu/${category}`}>{category}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
