import './ProfileNav.scss'

function ProfileNav () {
    return (
        <div className="profileNav">
            <div className="profileNav__left">
                <button className="profileNav__button profileNav__left--nav">L</button>
            </div>
            <div className="profileNav__right">
                <button className="profileNav__button profileNav__right--nav">R</button>
            </div>    
        </div>
    )
}

export default ProfileNav;