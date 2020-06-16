import React from 'react';
import InfoBlockStories from './InfoBlockStories'
import InfoBlockDetails from './InfoBlockDetails'

function InfoBlock() {
  return (
    <div className="row mt-4">
      <div className="col-3"></div>
          
        <div className="col-6">

          <InfoBlockDetails />
          <InfoBlockStories />
          
        </div>

      <div className="col-3"></div>
    </div>
  );
}

export default InfoBlock;
