import Weeknd from '../images/weeknd.png'
import BadFruit from '../images/badfruit.jpg'
import Forever from '../images/forever.jpg'



export const Song = () => {

    return (
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <img class=" height:20px"src={Weeknd} alt="weeknd"/>
                Scared to Live
                <span class="badge bg-primary rounded-pill">add to playlist</span>
            </li>
            <li  class="list-group-item d-flex justify-content-between align-items-center">
            <img  class="mw-100"src={BadFruit} alt="weeknd"/>

                Bad Fruit
                <span class="badge bg-primary rounded-pill">add to playlist</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <img class="mw-100"src={Forever} alt="weeknd"/>
                Forever
                <span class="badge bg-primary rounded-pill">add to playlist</span>
            </li>
        </ul>
    )

}
export default  Song;