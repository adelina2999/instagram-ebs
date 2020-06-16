import React from 'react';
import profilePicture from '../Assets/profile.png';

function InfoBlock() {
  return (
    <div className="row">
      <div className="col-3"> </div>
          
        <div className="col-6">

          <div className="row">
            <div class="col">
              <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
            </div>
            
            <div class="col">
              Text
            </div>
            
          </div>

          <div className="row">
            <div class="col">
              <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
            </div>
            <div class="col">
              <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
            </div>
            <div class="col">
              <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
            </div>
            <div class="col">
              <img src={profilePicture} alt="Profile" className="rounded-circle profile-picture"/>
            </div>
          </div>
          
        </div>

      <div className="col-3"></div>
    </div>
  );
}

export default InfoBlock;
