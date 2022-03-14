import React from "react";
import './DisplaySong.css';

const DisplaySong = (props) => {
    return (  
    <div>  
        <table className='song-table'>
        <thead>
            <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            </tr>
        </thead>
        <tbody>
            {props.displaySong.map((song, index) => { 
            return (
                <tr key= {index}>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.genre}</td>
                <td>{song.release_date}</td>
                </tr>
            )
            })}
        </tbody>
        </table>
    </div>     
    );
}
 
export default DisplaySong;