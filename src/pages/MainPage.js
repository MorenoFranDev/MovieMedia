import { useEffect, useState } from "react"
import {allMovies} from '../services/axiosQuery'
import {Card }from '../components/Card'

export function MainPage() {
const [movies,setMovie] = useState([]);

useEffect(()=>{
    allMovies().then(resp =>{setMovie(resp.data.results)}).catch(console.error("Error de api"))
},[])

return <div className="GridMovies">
    {movies.map(movie=>(
        <Card movie={movie} key={movie.id}/>
    ))}
</div>

}