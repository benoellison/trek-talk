import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import * as moviesAPI from '../../utilities/movies-api';
import * as seriesAPI from '../../utilities/series-api';
import AuthPage from '../AuthPage/AuthPage'
import MovieListPage from '../MovieListPage/MovieListPage';
import SeriesListPage from '../SeriesListPage/SeriesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
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

  // const [series, setSeries] = useState([])
  // useEffect(function() {
  //   async function getSeries() {
  //     const series = await seriesAPI.getAll();
  //     setSeries(series)
  //   }
  //   getSeries();
  // }, []);

  return (
    <main className="App">
      { user ? 
        <>
          <h1 class='text-yellow-500 text-6xl mt-5 mb-0 font-black'>Trek Talk</h1>
          <span class='m-5'><NavBar user={user} setUser={setUser} /></span>
          <Routes>
            <Route path="/movies" element={<MovieListPage movies={movies} />} />
            <Route path="/series" element={<SeriesListPage />} />
            <Route path="/movies/:id" element={<MovieDetailPage movies={movies} user={user} setUser={setUser}/>} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


