import axios from "axios";

const SPOTIFY_API = 'https://api.spotify.com/v1/tracks'

export const createSong = async (newSong) => {
    const response = await axios.post(SPOTIFY_API, newSong)
    const actualSong = response.data
    return actualSong
}

export const findAllSongs = async () => {
    const response = await axios.get(SPOTIFY_API)
    const songs = response.data
    return songs
}

export const deleteSong = async (mid) => {
    const response = await axios.delete()
    const status = response.data
    return mid
}


