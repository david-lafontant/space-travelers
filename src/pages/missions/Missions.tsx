import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import { AMission } from '../../types/types'
import Mission from '../../components/mission/Mission'
import { getMissions } from '../../features/mission/missionSlice'
import Spinner from '../../components/spinner/Spinner'

const Missions = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getMissions())
  }, [dispatch])

  let { loading, data } = useAppSelector((state) => state.missions)
  data?.forEach((item) => console.log(item.booked))
  return (
    <article className="row">
      <div className="col">
        <div className="p-4">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Mission</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col">blank</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>
                    <Spinner />
                  </td>
                </tr>
              ) : (
                data &&
                data.map((mission: JSX.IntrinsicAttributes & AMission) => (
                  <Mission key={mission.mission_id} {...mission} />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  )
}

export default Missions
