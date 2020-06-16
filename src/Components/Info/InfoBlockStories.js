import React from 'react';
import profilePicture from '../../Assets/profile.jpg';

function InfoBlockStories() {
  return (
    <div className="row">
      <div className="p-4ggi">
        <img src={profilePicture} alt="Profile" className="rounded-circle story-picture p-1 border"/>
        <h6>Inside EBS</h6>
      </div>
      <div className="p-4">
        <img src={profilePicture} alt="Profile" className="rounded-circle story-picture p-1 border"/>
        <h6>Party</h6>
      </div>
      <div className="p-4">
        <img src={profilePicture} alt="Profile" className="rounded-circle story-picture p-1 border"/>
        <h6>Events</h6>
      </div>
      <div className="p-4">
        <img src={profilePicture} alt="Profile" className="rounded-circle story-picture p-1 border"/>
        <h6>EBS People</h6>
      </div>
      
    </div>      
  );
}

export default InfoBlockStories;
