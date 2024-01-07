import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface MenuItemProps {
  foodData: Array<Food>;
}

interface Food {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  rate: number;
}

export default function MenuItem({ foodData }: MenuItemProps) {
  return (
    <>
      {foodData?.map((food: Food) => (
        <Card key={food.id} className='w-[350px] h-[500px]'>
          <CardHeader>
            <Image
              src={food.img}
              alt='food image'
              width={500}
              height={500}
              unoptimized
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{food.dsc}</CardTitle>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <p className='text-orange-500 font-bold text-xl'>${food.price}</p>
            <p>⭐ {food.rate}</p>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
