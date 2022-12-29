import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie, getElenc } from "../services/axiosQuery";
import { CharactersCard } from "../components/CharactersCard";
import style from './style.movie.css'
import Navbar from "../components/Navbar";

export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [characters, setCharacters] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    getMovie(id).then((respMovies) => setMovie(respMovies.data));
    getElenc(id).then((respCharacters) =>
      setCharacters(respCharacters.data.cast)
    );
  }, [id]);

  if (!movie || !characters) return null;
  const ImgPoster = "https://image.tmdb.org/t/p/w400" + movie.poster_path;

  return (
    <>
    <Navbar />
    <div className="poster" >
      <div className="Img">
        <img src={ImgPoster} />
      </div>
      <div className="Body" >
        <div className="Text">
          <h1 className="title" >{movie.original_title}</h1>
          <p className="description" >{movie.overview}</p>
          <div className="details"  >
            <p className="genre">
              Generos:
              {movie.genres.map((resp) => (
                <span className="Genre">{resp.name}</span>
              ))}
            </p>
            <p className="Release">Lanzamiento: <a>{movie.release_date}</a></p>
          </div>
        </div>
        <div className="actors" >
          {characters.map((character) =>
            (< CharactersCard character={character} key={character.id}/>))}
        </div>
        <p className="Site">
         
          {(movie.homepage!=="")?( "Oficial site:"+<a>{movie.homepage}</a>):<p>Gracias por su visita</p>} 
        </p>
      </div>
    </div>
    </>
  );
}
