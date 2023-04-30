import { useAppDispatch } from '../../hooks/useTypedSelectors'
import { toggleBooking as dragonBooking } from '../../features/dragon/dragonSlice'
import { toggleBooking as missionBooking } from '../../features/mission/missionSlice'
import { toggleBooking as rocketBooking } from '../../features/rocket/rocketSLice'
type InfoProps = {
  name: string
  category: 'mission' | 'rocket' | 'dragon'
  id: number | string
  wikipedia: string
}

const Info = ({ name, category, id, wikipedia }: InfoProps) => {
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
      <td>
        <a
          className="btn btn-outline-info"
          href={wikipedia}
          title="wikipedia description"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </td>
    </tr>
  )
}

export default Info
