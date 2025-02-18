interface Props {
  params: { carId: string };
}

const CarPage = (props: Props) => {
  const { params } = props;
  return (
    <>
      <h2>Car detail page</h2>
      <p>{params.carId}</p>
    </>
  );
};

export default CarPage;
