import React from 'react';

function InfoBlockDetailsEBSInfo() {
  return (
    <div className="col-8">
      <div className="row">

        <div className="col">
          <h3 className="profile-name">ebsintegrator</h3>
        </div>

        <div className="col">
          <button type="button" className="btn btn-primary">Follow</button>
        </div>
      </div>

      <div className="row">

        <div className="col">
          <h6><b>106</b> posts</h6>
        </div>

        <div className="col">
          <h6><b>178</b> followers</h6>
        </div>

        <div className="col">
          <h6><b>182</b> following</h6>
        </div>

      </div>

      <span>
        <b>EBS Integrator</b>
      </span>

      <ul>
        <li>MVP Builds</li>
        <li>Feature Web and Mobile Production </li>
        <li>Application Refactoring </li>
        <li>System Redesign</li>
      </ul>
      <a href="https://ebs-integrator.com/" target="_blank">ebs-integrator.com</a>
    </div>
  );
}

export default InfoBlockDetailsEBSInfo;
