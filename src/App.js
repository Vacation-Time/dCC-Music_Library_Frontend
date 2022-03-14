import React, { useState, useEffect } from 'react';
import CreateSong from './Components/CreateSong/CreateSong';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import axios from 'axios';


function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    createSong();
    updateSong();
  })

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data);
    console.log(response.data); // to view in console for testing
  } 

  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/music/', newSong);
    console.log(response.data); // to view in console for testing
    if(response.data === 201){
    await getAllSongs();
  }
  }
  
  async function updateSong(songData, songId){
    let response = await axios.post(`http://127.0.0.1:8000/music/${songId}`, songData);
    console.log(response.data); // to view in console for testing
  }


  return (
    <div>
      <div><NavBar/></div>
      <div><DisplaySongs displaySongs={songs}/></div> 
      <div><CreateSong addNewSong={createSong}/></div>
    </div>
  );
}

export default App;