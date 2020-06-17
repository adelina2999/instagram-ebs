import React from 'react';
import axios from 'axios';

export default class ProfilePhotos extends React.Component {
  state = {
    photosArray: []
  }

  componentDidMount() {
    axios.get(`https://api.unsplash.com/photos/?client_id=4IushdH8Es7iMCJyswS7P03PfoVYNFYkB1q2fJhiudM`)
      .then(response => {
        const photosArray = response.data;
        this.setState({ photosArray });
      })
  }

  render() {
    return (
      <div>
        { this.state.photosArray.map(photo => 
          <div key={photo.id}>
            <img src={photo.urls.small} />
          </div>
        )}
      </div>
        
    )
  }
}
