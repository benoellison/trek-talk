import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import * as moviesAPI from '../../utilities/movies-api';
import AuthPage from '../AuthPage/AuthPage'
import MovieListPage from '../MovieListPage/MovieListPage';
import SeriesListPage from '../SeriesListPage/SeriesListPage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(getUser())
  const [movies, setMovies] = useState([])
  useEffect(function() {
    async function getMovies() {
      const movies = await moviesAPI.getAll();
      setMovies(movies)
    }
    getMovies();
  }, []);
  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/movies" element={<MovieListPage movies={movies} />} />
            <Route path="/series" element={<SeriesListPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


