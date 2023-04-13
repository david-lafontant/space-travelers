import ButtonComponent from '../button/ButtonComponent'
import { AMission } from '../../types/types'

const Mission = ({
  mission_name,
  description,
  booked,
  mission_id,
}: AMission) => {
  const onClick = (id: number | string) => {
    console.log(`mission id = ${id}`)
  }
  return (
    <tr>
      <th scope="row">{mission_name}</th>
      <td>{description}</td>
      <td>
        <p className="badge bg-info text-dark">Status badge</p>
      </td>
      <td>
        {booked ? (
          <ButtonComponent
            booked={booked}
            text="Cancel Reservation"
            id={mission_id}
            onClick={onClick}
          />
        ) : (
          <ButtonComponent
            booked={booked}
            text="Reserve Rocket"
            id={mission_id}
            onClick={onClick}
          />
        )}
      </td>
    </tr>
  )
}

export default Mission
