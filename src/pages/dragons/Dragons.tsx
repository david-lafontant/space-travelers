import React from 'react';
import { useGetDragonsQuery } from '../../services/dragon/dragonService';
import { ADragon } from '../../types/types';
import Dragon from '../../components/dragon/Dragon';

const Dragons = () => {
  const { data, isLoading, error } = useGetDragonsQuery(null);
  if (isLoading) {
    return <div>Loading Dragons...</div>;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }
  return (
    <section className="container-fluid">
      {data?.map((dragon: JSX.IntrinsicAttributes & ADragon) => (
        <Dragon key={dragon.id} {...dragon} />
      ))}
    </section>
  );
};

export default Dragons;
