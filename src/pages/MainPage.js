import { useEffect, useState } from "react";
import { allMovies, findMovies } from "../services/axiosQuery";
import { Card } from "../components/Card";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import style from './style.main.css'

export function MainPage() {
  const [movies, setMovie] = useState([]);
  let { query } = useParams();
  useEffect(() => {
    if (query === undefined) {
      allMovies().then((resp) => {
        setMovie(resp.data.results);
      });
    } else {
      findMovies(query).then((resp) => {
        setMovie(resp.data.results);
      });
    }
  }, [query]);

  return (
    <>
      <Navbar />
      <div className="gridMovies">
        {movies.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}
