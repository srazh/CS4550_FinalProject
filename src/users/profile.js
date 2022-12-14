import Song from '../song/song.js'
import Sarah from '../images/sarah.jpg'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {logoutThunk} from "./users-thunk";
import SarahMingles from "./sarah-mingles";


export const Profile = () => {
    const navigate = useNavigate()
    const currentUser = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }

    return (
        <>
        <div>
        <div class="wd-user-section">
            <img class="wd-prof-pic" src={Sarah} alt="sarah "/>
            <h1 class="name">Sarah Zhang</h1>
            {
                currentUser &&
                <h2>Welcome new user: {currentUser.username}</h2>
            }
            </div>
            <div class="wd-username-section">
            <p>@srazh</p>
           
            </div>
            <h3 class="wd-top-songs-header"> Sarah's Top Songs </h3>
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
        <Song/>
        <SarahMingles/>
        </div>
        </>
    )
}
export default Profile;