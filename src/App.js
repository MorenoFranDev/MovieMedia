import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import Movie from './pages/Movie';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search/:query" element={<MainPage />} />
        <Route path="/movie/:id" element={<Movie  />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
