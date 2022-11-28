import Song from '../song/song.js'
import Sarah from '../images/sarah.jpg'


export const Profile = () => {

    return (
        <div>
        <div class="wd-user-section">
            <img class="wd-prof-pic" src={Sarah}/>
            <h1 class="name">Sarah Zhang</h1>

            </div>
            <div class="wd-username-section">
            <p>@srazh</p>

    
            </div>

            <h3 class="wd-top-songs-header"> Sarah's Top Songs </h3>

        <Song/>
        </div>
    )

}
export default Profile;