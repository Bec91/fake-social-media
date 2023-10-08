import './ProfileVideoCard.scss';
// Need to map videos into li
// change image tag to video tag
// need thumbnail images for video tags
function ProfileVideoCard () {
    return (
        <div className="VideoCardContainer">
            <ul className="VideoCardContainer__videoGallery">
                <li className="">
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt=""/>
                </li>
                <li>
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/e6FMMambeO4/640x416" alt=""/>
                </li>
                <li>
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/klCiPmzUw0Y/640x416" alt=""/>
                </li>
                <li className="">
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt=""/>
                </li>
                <li>
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/e6FMMambeO4/640x416" alt=""/>
                </li>
                <li>
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt=""/>
                </li>
                <li className="">
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt=""/>
                </li>
                <li>
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/e6FMMambeO4/640x416" alt=""/>
                </li>
                <li>
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt=""/>
                </li>

            </ul>
        </div>
    )
}

export default ProfileVideoCard;
