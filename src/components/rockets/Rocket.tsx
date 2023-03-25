import React from 'react';
import ButtonComponent from '../button/ButtonComponent';
import rocket from '../../assets/images/rockets.jpg';

export const Rocket = () => {
  return (
    <article className="row">
      <div className="fill col-md-4 ">
        <img src={rocket} className='img-fluid w-100' />
      </div>
      <div className="col-md-8 ">
        <div className="d-flex flex-column justify-content-around align-items-start">

          <h2>The Rockets</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos quasi repudiandae similique ullam at. Velit similique rem harum aut eveniet illum repellat accusantium ducimus corporis, magnam quas ad placeat!
          </p>
          <ButtonComponent />
        </div>
      </div>




    </article>
  )
}

export default Rocket;