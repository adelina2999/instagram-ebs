import React from 'react';
import axios from 'axios';
import CONSTANTS from '../constants'

export default class ProfilePhotos extends React.Component {
  state = {
    photosArray: []
  }

  componentDidMount() {
    axios.get(`https://api.unsplash.com/photos/?client_id=${CONSTANTS.clientId}`)
      .then(response => {
        const photosArray = response.data;
        this.setState({ photosArray });
      })
  }

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-2"></div>

            <div className="col-8 flex-container">
              { this.state.photosArray.map(photo => 
                <div key={photo.id} className="">
                  <img className="image-size" src={photo.urls.small} />
                </div>
              )}
            </div>

            <div className="col-3"></div>
          </div>
        </div> 
      </div>
    )
  }
}
