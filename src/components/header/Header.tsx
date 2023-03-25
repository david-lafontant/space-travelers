import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import planet from '../../assets/images/planet.png';

function Header(): JSX.Element {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={planet} alt="space travelers logo" width="50px" height="50px" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Rockets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dragons">Dragons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/missions">Missions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">My Profile</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </header>
  )
}

export default Header;
