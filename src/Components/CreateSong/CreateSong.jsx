import React, { useState } from 'react';
import './CreateSong.css';


const CreateSong = (props) => {

    const [songTitle, setTitle] = useState('');  // these hooks are waiting to catch data from the forms, this is setup with onChange logic
    const [songArtist, setArtist] = useState(''); 
    const [songAlbum, setAlbum] = useState(''); 
    const [releaseDate, setReleaseDate] = useState(''); 
    const [songGenre, setGenre] = useState(''); 


    function handleSubmit(event){
        event.preventDefault(); // prevents the page from refreshing when the submit button is pressed
        let newSong = { // this is the area where we stage our data together before sending off to app.js in our function call
            "title": songTitle,
            "artist": songArtist,
            "album": songAlbum,
            "date": releaseDate,
            "genre": songGenre
        }
        
        props.addNewSong(newSong);
        setTitle(""); //clear the text in the form
        setArtist(""); 
        setAlbum(""); 
        setReleaseDate(""); 
        setGenre(""); 
    }


    return (  

    <form onSubmit = {handleSubmit}>
        <div>
            <label htmlFor = 'Title'>Title</label>
            <input type = 'text' id = 'Title' placeholder = 'Song Title' value={songTitle} onChange={(event) => setTitle(event.target.value)}/> 
        </div>
        <div>
            <label htmlFor = 'Artist'>Artist</label>
            <input type = 'text' id = 'Artist' placeholder = 'Artist Name' value = {songArtist} onChange={(event) => setArtist(event.target.value)}/>
        </div>
        <div>
            <label htmlFor = 'Album'>Album</label>
            <input type = 'text' id = 'Album' placeholder = 'Album title' value={songAlbum} onChange={(event) => setAlbum(event.target.value)}/> 
        </div>
        <div>
            <label htmlFor = 'Release'>Release Date</label>
            <input type = 'date' id = 'Release' placeholder = 'Release Date' value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
        </div>
        <div>
            <label htmlFor = 'Genre'>Genre</label>
            <input type = 'text' id = 'Genre' placeholder = 'Genre' value = {songGenre} onChange={(event) => setGenre(event.target.value)}/>
        </div>
        <button type = 'submit'>Submit</button> 
    </form>
    );
}
 
export default CreateSong;