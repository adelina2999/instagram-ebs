import React from 'react';
import InfoBlockDetailsProfileImage from './InfoBlockDetailsProfileImage'
import InfoBlockDetailsEBSInfo from './InfoBlockDetailsEBSInfo'

function InfoBlockDetails() {
  return (
    <div className="row">

      <InfoBlockDetailsProfileImage />
      <InfoBlockDetailsEBSInfo />

    </div>

  );
}

export default InfoBlockDetails;
