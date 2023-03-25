import React from 'react';
import { Rocket } from '../../components/rocket/Rocket';


const Rockets = () => {
  return (
    <section className="container-fluid">
      Rockets
      <Rocket />
      <Rocket />
      <Rocket />
    </section>
  )
}

export default Rockets;