import { useEffect, useState } from "react"
import db_serie from "../tvshow.json"
import db_popular from "../popularTvShow.json"
import { Link } from "react-router-dom"
import Superior from "../components/navigate/Superior"
import Lateral from "../components/navigate/Lateral"
import InfiniteScroll from 'react-infinite-scroll-component';
import PopularSerie from "../components/body/PopularSerie"
import BannerSerie from "../components/body/BannerSerie"
import { getAPI_Series } from "../helpers/ApiURL"


export default function Series() {
  const [page, setPage] = useState(2)
  const [serie, setMovies] = useState(db_serie.results)
  const [popular, setPopular] = useState(db_popular.results)
  useEffect(() => {
    const getData = async()=> {
    const response = await getAPI_Series(page)
    setMovies([...serie, ...response.data.results])
    console.log(serie)
  }
  getData()
},[page])

return (
  <>
    <Lateral />
    <div className='content'>
      <Superior />
      <article>
        <h2>Most Popular serie</h2>
        <section className="populates">
          {
            popular.map((populate, index) => <Link to={"/tv/" + populate.id} key={index}><PopularSerie {...populate} key={index} /></Link>)
          }
        </section>
      </article>
      <article>
        <h2>serie</h2>
        <section className="billboard">
        <InfiniteScroll
              hasMore={true}
              dataLength={serie.length}
              next={() => setPage((prevPage) => prevPage + 1)}
            >
              {
                serie.map((billboard, index) => <Link to={"/tv/" + billboard.id} key={index}><BannerSerie {...billboard} key={index} /></Link>)
              }
            </InfiniteScroll>
        </section>
      </article>
    </div>
  </>
)
}