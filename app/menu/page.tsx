import Menu from '@/components/Menu';

export default function page() {
  return (
    <>
      {/* @ts-expect-error Async Server Component */}
      <Menu category='bbqs' />
    </>
  );
}
