'use client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import {
  bbqs,
  breads,
  burgers,
  chocolates,
  desserts,
  drinks,
  fried_chicken,
  ice_cream,
  pizzas,
  porks,
  sandwiches,
  sausages,
  steaks,
} from '../icons';
import { useParams } from 'next/navigation';

export default function MenuCarousel() {
  const categories = [
    { category: 'bbqs', logo: bbqs },
    { category: 'breads', logo: breads },
    { category: 'burgers', logo: burgers },
    { category: 'chocolates', logo: chocolates },
    { category: 'desserts', logo: desserts },
    { category: 'drinks', logo: drinks },
    { category: 'fried-chicken', logo: fried_chicken },
    { category: 'ice-cream', logo: ice_cream },
    { category: 'pizzas', logo: pizzas },
    { category: 'porks', logo: porks },
    { category: 'sandwiches', logo: sandwiches },
    { category: 'sausages', logo: sausages },
    { category: 'steaks', logo: steaks },
  ];

  const params = useParams<{ categories: string }>();

  return (
    <>
      <h2 className='text-xl text-center p-5 text-orange-500'>Categories</h2>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-10/12 m-auto'
      >
        <CarouselContent>
          {categories.map(({ category, logo }, index) => (
            <CarouselItem
              key={index}
              className='basis-1/2 md:basis-1/3 lg:basis-1/6'
            >
              <Card
                className={params.categories === category ? 'bg-red-600' : ''}
              >
                <CardContent className='flex aspect-square items-center justify-center p-5 text-orange-500 text-lg font-medium'>
                  <Link
                    href={`/menu/${category}`}
                    className='flex flex-col items-center'
                  >
                    <Image
                      src={logo}
                      alt='Food logo'
                      width={70}
                      placeholder='blur'
                      quality={100}
                    />

                    {category.replace('-', ' ')}
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
