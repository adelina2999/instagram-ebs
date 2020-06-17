import React from 'react'
import axios from 'axios'
import PopUp from './PopUp'
import CONSTANTS from '../constants'

export default class ProfilePhotos extends React.Component {
  state = {
    photosArray: [],
    isShown: false,
    photoId: ""
  }

  componentDidMount() {
    axios.get(`https://api.unsplash.com/photos/?client_id=${CONSTANTS.clientId}`)
      .then(response => {
        const photosArray = response.data;
        this.setState({ photosArray });
      })
  }

  handleClick = (photoId) => {   
    this.setState({ photoId });
    this.setState(state => ({ isShown: !state.isShown }));
  }

  getDataById = () =>{
    if(this.state.photoId != ''){ 
      return this.state.photosArray.find(photo => photo.id == this.state.photoId)
    }
  }

  render() {
    const isShown = this.state.isShown;
    return (
      <div>
        <div className="popup-position">{ isShown ? <PopUp photoData={this.getDataById()} /> : <> </> }</div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 flex-container">
            { this.state.photosArray.map(photo => 
              <div key={photo.id} className="">
                <img className="image-size" src={photo.urls.small} onClick={this.handleClick.bind(this, photo.id)} />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
