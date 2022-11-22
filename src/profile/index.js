import Song from '../song/song.js'
import Sarah from '../images/sarah.jpg'
export const Profile = () => {

    return (
        <div>
            <img class="wd-prof-pic" src={Sarah}/>
            <h3> Sarah's Top Songs </h3>

        <Song/>
        </div>
    )

}
export default Profile;