import Weeknd from '../images/weeknd.png'
import BadFruit from '../images/badfruit.jpg'
import Forever from '../images/forever.jpg'
import "../song/index.css";





export const Song = () => {

    return (
        <ul class="list-group">
            <li class="list-group-item">
                <img class="wd-song-image"src={Weeknd} alt="weeknd"/>
                Scared to Live
            </li>
            <li  class="list-group-item ">
            <img  class="wd-song-image" src={BadFruit} alt="weeknd"/>
            </li>
            <li class="list-group-item">
            <img class="wd-song-image" src={Forever} alt="weeknd"/>
                Forever
            </li>
        </ul>
    )

}
export default  Song;