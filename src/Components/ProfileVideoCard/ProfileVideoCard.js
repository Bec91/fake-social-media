import './ProfileVideoCard.scss';
// Need to map videos into li
// change <img/> to <video/>
// need thumbnail images for video tags
function ProfileVideoCard () {
    return (
        <div className="VideoCardContainer">
            <ul className="VideoCardContainer__videoGallery">
                <li>
                    <img className="VideoCardContainer__video" src="https://source.unsplash.com/VWcPlbHglYc/640x416" alt=""/>
                </li>
            </ul>
        </div>
    )
}

export default ProfileVideoCard;
