import './ProfileVideoCard.scss';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

// need thumbnail images for video tags


function ProfileVideoCard () {

        const [videoSources, setVideoSources] = useState ([
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'https://www.youtube.com/watch?v=JGwWNGJdvx8',
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'https://www.youtube.com/watch?v=JGwWNGJdvx8',
            'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            'https://www.youtube.com/watch?v=JGwWNGJdvx8'
        ])
        
        const renderVideos = () => {
            return videoSources.map((url,index) => (
                <div className="VideoCardContainer__videoContainer"
                    key={index}>
                    <ReactPlayer
                    className="VideoCardContainer__video"
                        url={url}
                        controls={true}
                        height= "100%"
                        width="100%"
                    /> 
                </div>
        ))
    }
    return (
        <div className="VideoCardContainer">
                    {renderVideos()}
        </div>
    )
}

export default ProfileVideoCard;
