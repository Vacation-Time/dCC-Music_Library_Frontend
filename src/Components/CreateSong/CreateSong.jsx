import React, { useState } from 'react';
import './CreateSong.css';
import {Button} from 'react-bootstrap';



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
            "release_date": releaseDate,
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
        <h2 className='addSong-title'>Add A Song Here</h2>
        <div className='create-container'>
            <form onSubmit = {handleSubmit}>
                <div className='form-contain'>
                    <div>
                        <label className='form-label' htmlFor = 'Title'></label>
                        <input type = 'text' id = 'Title' placeholder = 'Title:' value={songTitle} onChange={(event) => setTitle(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Artist'></label>
                        <input type = 'text' id = 'Artist' placeholder = 'Artist:' value = {songArtist} onChange={(event) => setArtist(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Album'></label>
                        <input type = 'text' id = 'Album' placeholder = 'Album:' value={songAlbum} onChange={(event) => setAlbum(event.target.value)}/> 
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Genre'></label>
                        <input type = 'text' id = 'Genre' placeholder = 'Genre:' value = {songGenre} onChange={(event) => setGenre(event.target.value)}/>
                    </div>
                    <div>
                        <label className='form-label' htmlFor = 'Release'></label>
                        <input type = 'date' id = 'Release' placeholder = 'Release Date' value = {releaseDate} onChange={(event) => setReleaseDate(event.target.value)}/>
                    </div>


                </div>            
                <div className='button-contain'> 
                    <div>
                    <Button variant="outline-primary" type='submit'>Add Song</Button>{' '}
                    </div>
                </div>  
            </form>
        </div>
    </div>
    
    );
}
 
export default CreateSong;