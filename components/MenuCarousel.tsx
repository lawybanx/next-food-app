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
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className='w-10/12 m-auto'
    >
      <CarouselContent>
        {categories.map((category, index) => (
          <CarouselItem key={index} className='md:basis-1/3 lg:basis-1/6'>
            <Card key={index}>
              <CardContent className='flex aspect-square items-center justify-center p-6'>
                <Link href={`/menu/${category}`}>{category}</Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
