import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors';
import Info from '../../components/info/Info';

const Profile = () => {
  const dispatch = useAppDispatch();

  const { data: missions } = useAppSelector((state) => state.missions);
  const { data: dragons } = useAppSelector((state) => state.dragons);
  const { data: rockets } = useAppSelector((state) => state.rockets);
  console.log(rockets);
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
            {missions?.map(
              (mission) => mission.booked && (
              <Info key={mission.mission_id} name={mission.mission_name} />
                ),
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
            {rockets?.map(
              (rocket) => rocket.booked && <Info key={rocket.id} name={rocket.name} />,
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
            {dragons?.map(
              (dragon) => dragon.booked && <Info key={dragon.id} name={dragon.name} />,
            )}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default Profile;
