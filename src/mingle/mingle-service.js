import axios from "axios";
const MOVIE_API_URL = 'http://localhost:4000/mingles'

export const createMingle = async (newMovie) => {
  const response = await axios.post(MOVIE_API_URL, newMovie)
  const actualMovie = response.data
  return actualMovie
}
export const findAllMingle = async () => {
  const response = await axios.get(MOVIE_API_URL)
  const movies = response.data
  return movies
}
export const updateMingle = async () => {}

export const deleteMingle = async (mid) => {
  const response = await axios.delete(`${MOVIE_API_URL}/${mid}`)
  const status = response.data
  return mid;
}