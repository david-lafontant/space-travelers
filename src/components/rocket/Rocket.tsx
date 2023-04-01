import React, { FC } from 'react';
import ButtonComponent from '../button/ButtonComponent';
import { ARocket } from '../../types/rocketsTypes';

export const Rocket = ({ rocket_name, description, flickr_images }: ARocket) => {

  return (
    <article className="row">
      <div className="fill col-md-4 ">
        // <img src={flickr_images[0]} className="img-fluid w-100" alt="rocket" />
      </div>
      <div className="col-md-8 ">
        <div className="d-flex flex-column justify-content-around align-items-start">

          <h2>{rocket_name}</h2>
          <p>
            {description}
          </p>
          <ButtonComponent />
        </div>
      </div>

    </article>
  )
};

export default Rocket;
