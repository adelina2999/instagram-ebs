import React from 'react';
import profilePicture from '../../Assets/profile.png';

function InfoBlockStories() {
  return (
    <div className="row">
      <div className="col">
        <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
      </div>
      <div className="col">
        <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
      </div>
      <div className="col">
        <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
      </div>
      <div className="col">
        <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
      </div>
    </div>      
  );
}

export default InfoBlockStories;
