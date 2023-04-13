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
        {booked ? (
          <p className="badge bg-info text-white">Active Member</p>
        ) : (
          <p className="badge bg-secondary text-white">Not A Member</p>
        )}
      </td>
      <td>
        {booked ? (
          <ButtonComponent
            booked={booked}
            text="Leave MIssion"
            id={mission_id}
            onClick={onClick}
            style="btn btn-outline-danger"
          />
        ) : (
          <ButtonComponent
            booked={booked}
            text="Join Mission"
            id={mission_id}
            onClick={onClick}
            style="btn btn-outline-secondary"
          />
        )}
      </td>
    </tr>
  )
}

export default Mission
