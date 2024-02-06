interface MenuItemRatingsProps {
  ratings?: number;
}

export default function MenuItemRatings({ ratings }: MenuItemRatingsProps) {
  return (
    <div className='absolute top-0 bottom-0 left-0 w-full h-[256px] bg-gradient-to-t from-black to-transparent bg-opacity-50 flex justify-center items-end text-white '>
      <p>Rating: {ratings}</p>
    </div>
  );
}
