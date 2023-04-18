import { useAppDispatch } from '../../hooks/useTypedSelectors'
import { toggleBooking as dragonBooking } from '../../features/dragon/dragonSlice'
import { toggleBooking as missionBooking } from '../../features/mission/missionSlice'
import { toggleBooking as rocketBooking } from '../../features/rocket/rocketSLice'
type InfoProps = {
  name: string
  category: 'mission' | 'rocket' | 'dragon'
  id: number | string
}

const Info = ({ name, category, id }: InfoProps) => {
  const dispatch = useAppDispatch()
  const handleClick = (
    id: number | string,
    category: 'mission' | 'rocket' | 'dragon'
  ) => {
    switch (category) {
      case 'mission':
        dispatch(missionBooking(id))
        break
      case 'rocket':
        dispatch(rocketBooking(id))
        break
      case 'dragon':
        dispatch(dragonBooking(id))
        break
      default:
        const error = 'error'
        break
    }
    console.log('function fired')
  }
  return (
    <tr>
      <td>{name}</td>
      <td>
        <button
          onClick={() => handleClick(id, category)}
          className="btn btn-outline-secondary"
        >
          Cancel Reservation
        </button>
      </td>
    </tr>
  )
}

export default Info
