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

        <div>
        <h2 className='addSong-title'>Add A Song Below</h2>
        <div className='create-container'>
            <form onSubmit = {handleSubmit}>
                <div className='form-contain'>
                    <div>
                        <label className='form-label' htmlFor = 'Title'>Title:</label>
                        <input type = 'text' id = 'Title' placeholder = 'add text' value={songTitle} onChange={(event) => setTitle(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Artist'>Artist:</label>
                        <input type = 'text' id = 'Artist' placeholder = 'add text' value = {songArtist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Album'>Album:</label>
                        <input type = 'text' id = 'Album' placeholder = 'add text' value={songAlbum} onChange={(event) => setAlbum(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Genre'>Genre:</label>
                        <input type = 'text' id = 'Genre' placeholder = 'add text' value = {songGenre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Release'>Release Date:</label>
                        <input type = 'date' id = 'Release' placeholder = 'Release Date' value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>

                </div> 
                <div className='button-contain'> 
                    <div>
                        <button type = 'submit' className='add-button'>Add Song</button> 
                    </div>
                </div>  
            </form>
        </div>
    </div>
    );
}
 
export default CreateSong;