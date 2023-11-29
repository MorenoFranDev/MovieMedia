import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getAPI_DetailSerie } from "../helpers/ApiURL"
import "../components/body/VideoClasses.css"
import Superior from "../components/navigate/Superior"
import Lateral from "../components/navigate/Lateral"
import SeriesSeason from "../components/body/series/SeriesSeason"

export default function SeriesDetail() {
    const { tv_id } = useParams()
    const [serie, setSerie] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            const resultSerie = await getAPI_DetailSerie(tv_id)
            setSerie(resultSerie.data)
            console.log(resultSerie.data)
            setLoading(false)
        }
        getData()
    }, [tv_id])

    if (loading) {
        return <h1>Loading</h1>;
    }

    return (
        <>
            <Lateral />
            <div className='content'>
                <Superior />
                <article className="detail_movie_card" style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${serie.backdrop_path}")` }}>
                    <h2>{serie.original_name}</h2>
                    <div className="banner">
                        <div className="poster">
                            <img className="poster_img" src={"https://image.tmdb.org/t/p/w342/" + serie.poster_path} alt={serie.poster_path} />
                        </div>
                        <div className="banner_body">
                            <div>{serie.overview}</div>
                            <div>{serie.release_date}</div>
                            <div className="genres">Genres: {serie.genres.map((genre, index) => <p className="genre" key={index}>{genre.name}</p>)}</div>
                        </div>
                    </div>
                    <h2>Seanson</h2>
                    <div className="seanson">
                        {
                            serie.seasons.map((sean, index) =>
                                <SeriesSeason  {...sean} key={index} />
                            )
                        }
                    </div>
                </ article>
            </div>
        </>
    )
}
