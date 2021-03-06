import React, { useState, useEffect } from 'react';
import CreateSong from './Components/CreateSong/CreateSong.jsx'
import DisplaySongs from './Components/DisplaySong/DisplaySong.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import './App.css';
import axios from 'axios';



function App() {

  const [songs, setSongs] = useState([]); // where data is stored
  const apiLink="http://127.0.0.1:8000/api/music/";

  useEffect(() => { // gets list os songs when form is used
    getAllSongs();
  },[])

  async function getAllSongs(){
    let response = await axios.get(apiLink);
    setSongs(response.data);
    //console.log(response.data); // to view in console for testing
  } 

  async function createSong(newSong){
    let response = await axios.post(apiLink, newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }
  
  async function deleteSong(song){
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${song.id}/`);
    await getAllSongs();
  }


  return (
    <div className='page-container'>
      <div><NavBar/></div>
      <div><DisplaySongs displaySongs = {songs} deleteSongProp = {deleteSong}/></div> 
      <div><CreateSong addNewSong={createSong}/></div>
    </div>
  );
}

export default App;