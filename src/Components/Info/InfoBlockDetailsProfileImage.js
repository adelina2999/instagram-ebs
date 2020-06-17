import React from 'react';
import profilePicture from '../../Assets/profile.jpg';

function InfoBlockDetailsProfileImage() {
  return (
    <div className="col-4 container">
      <div className="d-flex justify-content-center h-100">
      <div className="image_outer_container">
        <div className="image_inner_container">
          <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture border"/>
        </div>
      </div>
      </div>
    </div>

  );
}

export default InfoBlockDetailsProfileImage;
