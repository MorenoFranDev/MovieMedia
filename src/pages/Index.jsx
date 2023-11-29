import "../index.css"
import Superior from '../components/navigate/Superior'
import DB_popularMovies from "../popularMovies.json"
import DB_popularTvShow from "../popularTvShow.json"
import DB_movies from "../movies.json"
import DB_tv_show from "../tvshow.json"
import { useState } from "react"
import Lateral from "../components/navigate/Lateral"
import { Link } from "react-router-dom"
import PopularMovie from "../components/body/PopularMovie"
import BannerMovie from "../components/body/BannerMovie"
import PopularSerie from "../components/body/PopularSerie"
import BannerSerie from "../components/body/BannerSerie"


export default function Index() {

    const [popularMovies, setPopularMovies] = useState(DB_popularMovies.results)
    const [popularTvShow, setPopularTvShow] = useState(DB_popularTvShow.results)
    const [movies, setMovies] = useState(DB_movies.results)
    const [tv_show, setTvShow] = useState(DB_tv_show.results)

    return (
        <>
            <Lateral />
            <div className='content'>
                <Superior />
                <article>
                    <h2>Most Popular Movies</h2>
                    <section className="populates">
                        {
                            popularMovies.map((populate, index) => <Link to={"/movie/" + populate.id} key={index}><PopularMovie {...populate} key={index} /></Link>)
                        }
                    </section>
                </article>
                <article>
                    <h2>Movies</h2>
                    <section className="billboard">
                        {
                            movies.map((billboard, index) => <Link to={"/movie/" + billboard.id} key={index}><BannerMovie {...billboard} key={index} /></Link>)
                        }
                        <Link to={"/movies"} className="Btn_most" >Most movie </Link>
                    </section>
                </article>
                <article>
                    <h2>Most Popular TV Show</h2>
                    <section className="populates">
                        {
                            popularTvShow.map((populate, index) => <Link to={"/serie/" + populate.id} key={index}><PopularSerie {...populate} /></Link>)
                        }
                    </section>
                </article>
                <article>
                    <h2>TV Show</h2>
                    <section className="billboard">
                        {
                            tv_show.map((billboard, index) => <Link to={"/serie/" + billboard.id} key={index}><BannerSerie {...billboard} key={index} /></Link>)
                        }
                        <Link to={"/series"} className="Btn_most" >Most movie </Link>
                    </section>
                </article>
            </div>
        </>
    )
}
