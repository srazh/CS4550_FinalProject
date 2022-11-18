import Weeknd from '../images/weeknd.png'

export const Song = () => {

    return (
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <img class="wd-song-image"src={Weeknd} alt="weeknd"/>
                Scared to Live
                <span class="badge bg-primary rounded-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Bad Fruit
                <span class="badge bg-primary rounded-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Forever
                <span class="badge bg-primary rounded-pill">1</span>
            </li>
        </ul>
    )

}
export default  Song;