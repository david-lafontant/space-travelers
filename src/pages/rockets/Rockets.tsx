import React from "react";
import { useGetRocketsQuery } from "../../features/rockets/rocketSlice";
import { Rocket } from "../../components/rocket/Rocket";

const Rockets = () => {
  const { data, isLoading, error } = useGetRocketsQuery(null);
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }

  return (
    <section className="container-fluid">
      {data?.map((rocket) => (
        <Rocket key={rocket.id} {...rocket} />
      ))}
    </section>
  );
};

export default Rockets;
