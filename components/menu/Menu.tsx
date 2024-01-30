import MenuItem from './MenuItem';

interface MenuProps {
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
      `https://food-menus-api.onrender.com/${category}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Menu({ category }: MenuProps) {
  const foodData: Array<Food> = await fetchData(category);

  return (
    <>
      <div className='grid sm:grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 place-items-center'>
        <MenuItem foodData={foodData} />
      </div>
    </>
  );
}
