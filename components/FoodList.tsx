import Image from 'next/image';

interface FoodListProps {
  category: string;
}

interface Food {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  rate: number;
}

async function fetchData(category: string) {
  try {
    const response = await fetch(
      `https://food-menus-api.onrender.com/${category}`,
      { cache: 'force-cache' }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function FoodList({ category }: FoodListProps) {
  const foodData = await fetchData(category);

  return (
    <>
      <div className='grid sm:grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 my-10 place-items-center'>
        {foodData.map((food: Food) => (
          <div key={food.id}>
            <Image
              src={food.img}
              alt='food image'
              width={300}
              height={300}
              unoptimized
            />
            <h2>{food.dsc}</h2>
            <p>{food.price}</p>
            <p>⭐ {food.rate}</p>
          </div>
        ))}
      </div>
    </>
  );
}
