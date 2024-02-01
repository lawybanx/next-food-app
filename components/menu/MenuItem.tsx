import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import MenuImage from './MenuImage';
import AddToCart from './AddToCart';

interface MenuItemProps {
  foodData: Array<Food>;
}

export interface Food {
  id: string;
  img: string;
  dsc: string;
  price: number;
}

export default function MenuItem({ foodData }: MenuItemProps) {
  return (
    <>
      {foodData?.map((food: Food) => (
        <Card key={food.id} className='w-[280px] h-auto border-0 shadow-none '>
          <CardHeader className='h-[300px] px-3'>
            <MenuImage image={food.img} />
          </CardHeader>
          <CardContent className='px-3 pb-2'>
            <CardTitle className='h-[52px] line-clamp-2 overflow-hidden text-lg'>
              {food.dsc}
            </CardTitle>
          </CardContent>
          <CardFooter className='flex justify-between px-3'>
            <p className='text-orange-500 font-bold text-xl'>${food.price}</p>

            <AddToCart food={food} />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
