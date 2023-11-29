import { useEffect, useState } from "react"
import { getAPI_MOVIES } from "../helpers/ApiURL"
import db_movies from "../movies.json"
import db_popular from "../popularMovies.json"
import { Link } from "react-router-dom"
import Superior from "../components/navigate/Superior"
import Lateral from "../components/navigate/Lateral"
import PopularMovie from "../components/body/PopularMovie"
import BannerMovie from "../components/body/BannerMovie"
import InfiniteScroll from 'react-infinite-scroll-component';


export default function Movies() {
  const [page, setPage] = useState(2)
  const [movies, setMovies] = useState(db_movies.results)
  const [popular, setPopular] = useState(db_popular.results)
  useEffect(() => {
    const getData = async()=> {
    const response = await getAPI_MOVIES(page)
    setMovies([...movies, ...response.data.results])
    console.log(movies)
  }
  getData()
},[page])

return (
  <>
    <Lateral />
    <div className='content'>
      <Superior />
      <article>
        <h2>Most Popular Movies</h2>
        <section className="populates">
          {
            popular.map((populate, index) => <Link to={"/movie/" + populate.id} key={index}><PopularMovie {...populate} key={index} /></Link>)
          }
        </section>
      </article>
      <article>
        <h2>Movies</h2>
        <section className="billboard">
        <InfiniteScroll
              hasMore={true}
              dataLength={movies.length}
              next={() => setPage((prevPage) => prevPage + 1)}
            >
              {
                movies.map((billboard, index) => <Link to={"/movie/" + billboard.id} key={index}><BannerMovie {...billboard} key={index} /></Link>)
              }
            </InfiniteScroll>
        </section>
      </article>
    </div>
  </>
)
}
