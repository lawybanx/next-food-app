import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Counter from './Counter';
import { ShoppingCart } from 'lucide-react';
import MenuImage from './MenuImage';

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
          <CardHeader className='h-[348px]'>
            <MenuImage image={food.img} />
          </CardHeader>
          <CardContent className='h-[72px]'>
            <CardTitle className='h-[52px] line-clamp-2 overflow-hidden'>
              {food.dsc}
            </CardTitle>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <p className='text-orange-500 font-bold text-xl'>${food.price}</p>
            <div className='flex items-center '>
              <Counter />
              <button className='bg-red-600 rounded-md shadow-md p-1 ml-1 hover:opacity-70'>
                <ShoppingCart color='#ffffff' absoluteStrokeWidth />
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
