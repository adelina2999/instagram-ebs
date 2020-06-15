import React from 'react';
import profilePicture from '../Assets/profile.png';

function InfoBlock() {
  return (
    <div>
      <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
    </div>
  );
}

export default InfoBlock;
