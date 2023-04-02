import React from 'react';
import { useGetMissionsQuery } from '../../services/mission/missionService';
import Mission from '../../components/mission/Mission';
import { AMission } from '../../types/types';

const Missions = () => {
  const { data, isLoading, error } = useGetMissionsQuery(null);
  if (isLoading) {
    return <div>Loading Mission...</div>;
  }

  if (error) {
    return <h1>ERROR</h1>;
  }
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

              {data?.map((mission: JSX.IntrinsicAttributes & AMission) => (
                <Mission key={mission.mission_id} {...mission} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  )
};

export default Missions;
