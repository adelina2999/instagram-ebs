import React from 'react';
import InfoBlockStories from './InfoBlockStories'
import InfoBlockDetails from './InfoBlockDetails'

function InfoBlock() {
  return (
    <div>

      <div className="row mt-4">
        <div className="col-3"></div>
          
          <div className="col-6">
            <InfoBlockDetails />
          </div>

        <div className="col-3"></div>
      </div>

      <div className="row mt-4">
        <div className="col-2"></div>
    
        <div className="col-8 ml-5">
          <InfoBlockStories />
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
