import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowAltCircleRight, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import './nav.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [location, setLocation] = useState('');
  // const [cardHidden, setCardHidden] = useState(true);

  // const toggleCard = () => {
  //   setCardHidden(!cardHidden);
  // };

  const handleLocationClick = () => {
    if (location !== null && location !== '') {
      // Handle location click event
    } else {
      alert('Please set location');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg nav-main navbar-dark" id="nav-main">
      <div className="container-fluid">
        <img
          // src="https://www.linkpicture.com/q/logo-exp-light.png"
          src="https://i.ibb.co/FgZkcNT/logo-exp.png"
          alt="Foodex Logo"
          width="120px"
          style={{ marginLeft: '40px' }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"></div>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact and Support
              </Link>
            </li>
            <li className="nav-item">
              {location !== null && location !== '' ? (
                <Link className="nav-link" to="/browseitems" onClick={handleLocationClick}>
                  Browse Items
                </Link>
              ) : (
                <Link className="nav-link" to="/browseitems" onClick={() => alert('Please set location')}>
                  Browse Items
                </Link>
              )}
            </li>
            <li className="nav-item">
              {location !== null && location !== '' ? (
                <Link className="nav-link" to="/browserestaurants" onClick={handleLocationClick}>
                  Browse Restaurants
                </Link>
              ) : (
                <Link className="nav-link" to="/browserestaurants" onClick={() => alert('Please set location')}>
                  Browse Restaurants
                </Link>
              )}
            </li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
            {!1 ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link nav-reg" href="login" style={{ backgroundColor: 'grey', color: 'white' }}>
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-reg" href="signup" style={{ backgroundColor: 'grey', color: 'white' }}>
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link nav-reg" href="login" style={{ backgroundColor: 'grey', color: 'white' }}>
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-reg" href="register" style={{ backgroundColor: 'grey', color: 'white'}}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
