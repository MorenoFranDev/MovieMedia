export const base = "https://api.themoviedb.org/3"
import axios from "axios"

// const tv = await axios.get(base + "/discover/tv", { headers: { "Authorization": TOKEN } })
// const popular_movie = await axios.get(base + "/movie/popular", { headers: { "Authorization": TOKEN } })
// const popular_tv = await axios.get(base + "/tv/popular", { headers: { "Authorization": TOKEN } })


const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs"
export const getAPI_MOVIES = async (page) => { return await axios.get(`${base}/discover/movie?page=${page}`, { headers: { "Authorization": TOKEN } }) }
export const getAPI_DetailMovies = async (movie_id) => { return await axios.get(`${base}/movie/${movie_id}?language=en-US`, { headers: { "Authorization": TOKEN } }) }
export const getAPI_CastMovies = async (movie_id) => { return await axios.get(`${base}/movie/${movie_id}/credits`, { headers: { "Authorization": TOKEN } }) }


export const getAPI_Series = async (page) => { return await axios.get(`${base}/discover/tv?page=${page}`, { headers: { "Authorization": TOKEN } }) }
export const getAPI_DetailSerie = async (movie_id) => { return await axios.get(`${base}/tv/${movie_id}?language=en-US`, { headers: { "Authorization": TOKEN } }) }
export const getAPI_DetailSeansonSerie = async (series_id, season_number) => { return await axios.get(`${base}/tv/${series_id}/season/${season_number}`, { headers: { "Authorization": TOKEN } }) }