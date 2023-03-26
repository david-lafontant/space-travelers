import React from 'react';
import Info from '../../components/info/Info';

const Profile = () => (
  <article className="row">
    <div className="col-md-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">My Mission</th>
          </tr>
        </thead>
        <tbody>
          <Info />
          <Info />
          <Info />
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
          <Info />
          <Info />
          <Info />
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
          <Info />
          <Info />
          <Info />
        </tbody>
      </table>
    </div>
  </article>
);

export default Profile;
