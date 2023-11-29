import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Index from "./pages/Index";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import SeriesDetail from "./pages/SeriesDetail";
import Series from "./pages/Series";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/series" element={<Series />} />
        <Route path="/serie/:tv_id" element={<SeriesDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
