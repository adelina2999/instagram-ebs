import React from 'react';
import './App.css';
import Header from './Components/Header';
import InfoBlock from './Components/InfoBlock'
import ProfilePhotos from './Components/ProfilePhotos'
import PopUp from './Components/PopUp'

function App() {
  return (
    <div>
      <Header></Header>
      <InfoBlock></InfoBlock>
      <ProfilePhotos></ProfilePhotos>
      <PopUp></PopUp>
    </div>
  );
}

export default App;
