import axios from "axios";

export const allMovies=async ()=>{
const resp = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8bc22c3636a1f17771d2dc4a5d6f8166&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate')
return resp;
}

export const getMovie = async(id)=>{
const resp = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8bc22c3636a1f17771d2dc4a5d6f8166&language=en-US`)
return resp
} 

export const getElenc = async(id)=>{
    const resp = await axios.get(`http://api.themoviedb.org/3/movie/${id}/casts?api_key=8bc22c3636a1f17771d2dc4a5d6f8166`)
return resp
}
