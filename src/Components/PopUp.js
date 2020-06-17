import React from 'react';

export default class ProfilePhotos extends React.Component {
  
  constructor (props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        <div className="row background">
          <div className="col">
            <div>
              <img src={this.props.photoData.urls.regular} className="details-image-size"></img>
            </div>
          </div>

          <div className="col">
            <div className="row">
              EBSIntegrator Following
            </div>
            <div className="row">
              EBSIntegrator { this.props.photoData.description}
            </div>
            </div>
        </div>
      </div>
    );
  }

}
