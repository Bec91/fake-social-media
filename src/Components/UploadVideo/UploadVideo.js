import './UploadVideo.scss'
import React, { useState } from "react";


function UploadVideo () {
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <div className='uploadVideo'>
            <h2 className='uploadVideo__title'>Add Video</h2>
            <input type='file' onChange={handleChange} />
            <img src={file} alt="adjsalf" />
        </div>
        
    )
}
export default UploadVideo;