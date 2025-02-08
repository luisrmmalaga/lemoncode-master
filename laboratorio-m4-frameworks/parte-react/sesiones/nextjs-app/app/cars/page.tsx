'use client';
import { useRouter } from 'next/router';

const CarListPage = () => {
  const router = useRouter();
  const onNavigateBack = () => {
    router.push('/');
  };
  return (
    <>
      <h2>Car list page</h2>
      <ul>
        <li>Audi Q8</li>
        <li>BMW X7</li>
      </ul>
      <button onClick={onNavigateBack}></button>
    </>
  );
};

export default CarListPage;
