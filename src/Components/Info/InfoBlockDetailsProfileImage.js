import React from 'react';
import profilePicture from '../../Assets/profile.jpg';

function InfoBlockDetailsProfileImage() {
  return (
    <div className="col-4">
      <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture border"/>
    </div>

  );
}

export default InfoBlockDetailsProfileImage;
