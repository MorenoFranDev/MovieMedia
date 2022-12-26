import { Link } from "react-router-dom"

export function Card({ movie }) {
    const IMG = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

    return <div className="CardMovie">
        <div className="CardImg">
            <Link to={"movie/"+movie.id}><img src={IMG} alt="MDN" /></Link>
        </div>
        <div className="CardTitle">
            <h3>{movie.title}</h3>
        </div>
    </div>
}