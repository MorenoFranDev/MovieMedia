import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAPI_CastMovies, getAPI_DetailMovies } from '../helpers/ApiURL'
import Actors from '../components/body/movies/Actors'
import "../components/body/VideoClasses.css"
import Superior from '../components/navigate/Superior'
import Lateral from '../components/navigate/Lateral'

export default function MovieDetail() {
    let { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [credits, setCredits] = useState(null)
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        const getData = async () => {
            const resultMovie = await getAPI_DetailMovies(id)
            const resultCast = await getAPI_CastMovies(id)
            setMovie(resultMovie.data)
            setCredits(resultCast.data.cast)

            setLoading(false)
        }
        getData()
    }, [id])
    if (loading) {
        return <h1>Loading</h1>;
    }
    return (
        <>
        <Lateral />
        <div className='content'>
            <Superior />
            <article className="detail_movie_card" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")` }}>
                <h2>{movie.title}</h2>
                <div className="banner">
                    <div className="poster">
                        <img className="poster_img" src={"https://image.tmdb.org/t/p/w342/" + movie.poster_path} alt={movie.poster_path} />
                    </div>
                    <div className="banner_body">
                        <div>{movie.overview}</div>
                        <div>{movie.title}</div>
                        <div>{movie.release_date}</div>
                        <div className="genres">Genres:
                            {movie.genres.map((genre, index) => <p className='genre' key={index}>{genre.name}</p>)}
                        </div>
                    </div>
                </div>
                <h2>Actors</h2>
                <div className="casting">
                    {credits.map((cast, index) => (<Actors {...cast} key={index} />))}
                </div>
            </article>
            </div>
        </>)
}