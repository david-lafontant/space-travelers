import React from 'react';
import Mission from '../../components/mission/Mission';

const Missions = () => {
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
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <Mission />
              <Mission />
              <Mission />
              <Mission />
            </tbody>
          </table>
        </div>
      </div>
    </article>
  )
}

export default Missions;