import React from 'react';
import profilePicture from '../Assets/profile.png';

function InfoBlockDetailsProfileImage() {
  return (
    <div className="col">
      <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
    </div>

  );
}

export default InfoBlockDetailsProfileImage;
