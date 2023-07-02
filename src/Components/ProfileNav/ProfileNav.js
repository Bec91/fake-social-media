import './ProfileNav.scss'

function ProfileNav () {
    return (
        <div className="profileNav">
            <div className="profileNav__left">
                <button className="profileNav__left--nav">LEFT</button>
            </div>
            <div className="profileNav__right">
                <button className="profileNav__right--nav">RIGHT</button>
            </div>    
        </div>
    )
}

export default ProfileNav;