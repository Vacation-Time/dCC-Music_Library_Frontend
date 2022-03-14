import React, { useState, useEffect } from 'react';
import CreateSong from './Components/CreateSong/CreateSong.jsx'
import DisplaySongs from './Components/DisplaySong/DisplaySong.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import './App.css';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]); // where data is stored

  useEffect(() => {
    getAllSongs();
    createSong();
    updateSong();
  })

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log(response.data); // to view in console for testing
  } 

  async function createSong(newSong){ 
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    console.log(response.data); // to view in console for testing
    //await getAllSongs();
  
  }
  
  async function updateSong(songData, songId){
    let response = await axios.put(`http://127.0.0.1:8000/api/music/${songId}`, songData);
    console.log(response.data); // to view in console for testing
    //await getAllSongs();
  }


  return (
    <div>
      <div><NavBar/></div>
      <div><DisplaySongs displaySong={songs}/></div> 
      <div><CreateSong addNewSong={createSong}/></div>
    </div>
  );
}

export default App;