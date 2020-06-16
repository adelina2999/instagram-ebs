import React from 'react';
import instagramLogo from '../Assets/logo-text.png'

function Header() {
  return (
    <div className="bg-light pt-2 pb-2 border-bottom">
        <div className="row">

          <div className="col d-flex justify-content-center">
            <img src={instagramLogo} alt="Logo" className="instagram-logo"/> 
          </div>

          <div className="col d-flex justify-content-center input-group-sm">
            <input className="form-control" style={ {width: "40%" }} type="text" placeholder="Search" aria-label="Search" />
          </div>

          <div className="col d-flex justify-content-center">
            <a className="btn btn-primary" href="#" role="button">Log In</a>
            <button type="button" className="btn btn-link">Sign Up</button>
          </div>
        </div>
    </div>
  );
}

export default Header;
  