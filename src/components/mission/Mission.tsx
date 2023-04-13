import ButtonComponent from '../button/ButtonComponent'
import { AMission } from '../../types/types'
import { useAppDispatch } from '../../hooks/useTypedSelectors'
import { toggleBooking } from '../../features/mission/missionSlice'

const Mission = ({
  mission_name,
  description,
  booked,
  mission_id,
}: AMission) => {
  const dispatch = useAppDispatch()
  const onClick = (id: number | string) => {
    dispatch(toggleBooking(id))
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
            text="Reserve Mission"
            id={mission_id}
            onClick={onClick}
          />
        )}
      </td>
    </tr>
  )
}

export default Mission
