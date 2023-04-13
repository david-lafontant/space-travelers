import ButtonComponent from '../button/ButtonComponent'
import { ADragon } from '../../types/types'

const Dragon = ({ name, description, flickr_images, booked, id }: ADragon) => {
  const onClick = (id: number | string) => {
    console.log(`dragon id = ${id}`)
  }
  return (
    <article className="row">
      <div className="fill col-md-4 ">
        <img src={flickr_images[0]} className="img-fluid w-100" alt="dragon" />
      </div>
      <div className="col-md-8 ">
        <div className="d-flex flex-column justify-content-around align-items-start">
          <h2>{name}</h2>
          <p>{description}</p>
          {booked ? (
            <ButtonComponent
              booked={booked}
              text="Cancel Reservation"
              id={id}
              onClick={onClick}
            />
          ) : (
            <ButtonComponent
              booked={booked}
              text="Reserve Rocket"
              id={id}
              onClick={onClick}
            />
          )}
        </div>
      </div>
    </article>
  )
}

export default Dragon
