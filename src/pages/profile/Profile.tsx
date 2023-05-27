import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors'
import Info from '../../components/info/Info'
import { getDragons } from '../../features/dragon/dragonSlice'
import { getMissions } from '../../features/mission/missionSlice'
import { getRockets } from '../../features/rocket/rocketSLice'
import Alert from '../../components/no-mission/Alert'
import quantity from '../../utils/quantity'

const Profile = () => {
  const dispatch = useAppDispatch()

  const refreshDragon = useAppSelector((state) => state.dragons.refresh)
  const refreshMission = useAppSelector((state) => state.rockets.refresh)
  const refreshRocket = useAppSelector((state) => state.missions.refresh)
  useEffect(() => {
    if (refreshDragon === 0) {
      dispatch(getDragons())
    }
    if (refreshRocket === 0) {
      dispatch(getRockets())
    }
    if (refreshMission === 0) {
      dispatch(getMissions())
    }
  }, [dispatch])
  const { data: missions } = useAppSelector((state) => state.missions)
  const { data: dragons } = useAppSelector((state) => state.dragons)
  const { data: rockets } = useAppSelector((state) => state.rockets)
  const missionBooked: boolean = quantity(missions)
  const rocketBooked: boolean = quantity(rockets)
  const dragonBooked: boolean = quantity(dragons)
  return (
    <article className="row">
      <div className="col-md-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">My Mission</th>
            </tr>
          </thead>
          <tbody>
            {missionBooked ? (
              missions?.map(
                (mission) =>
                  mission.booked && (
                    <Info
                      key={mission.mission_id}
                      id={mission.mission_id}
                      name={mission.mission_name}
                      category="mission"
                      wikipedia={mission.wikipedia}
                    />
                  )
              )
            ) : (
              <Alert message="mission" />
            )}
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {/* {rockets?.map(
              (rocket) =>
                rocket.booked && (
                  <Info
                    key={rocket.id}
                    id={rocket.id}
                    name={rocket.name}
                    category="rocket"
                  />
                )
            )} */}
            {rocketBooked ? (
              rockets?.map(
                (rocket) =>
                  rocket.booked && (
                    <Info
                      key={rocket.id}
                      id={rocket.id}
                      name={rocket.name}
                      category="rocket"
                      wikipedia={rocket.wikipedia}
                    />
                  )
              )
            ) : (
              <Alert message="rocket" />
            )}
          </tbody>
        </table>
      </div>
      <div className="col-md-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">My Dragons</th>
            </tr>
          </thead>
          <tbody>
            {/* {dragons?.map(
              (dragon) =>
                dragon.booked && (
                  <Info
                    key={dragon.id}
                    id={dragon.id}
                    name={dragon.name}
                    category="dragon"
                  />
                )
            )} */}
            {dragonBooked ? (
              dragons?.map(
                (dragon) =>
                  dragon.booked && (
                    <Info
                      key={dragon.id}
                      id={dragon.id}
                      name={dragon.name}
                      category="dragon"
                      wikipedia={dragon.wikipedia}
                    />
                  )
              )
            ) : (
              <Alert message="dragon" />
            )}
          </tbody>
        </table>
      </div>
    </article>
  )
}

export default Profile
