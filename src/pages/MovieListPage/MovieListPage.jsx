import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as moviesAPI from '../../utilities/movies-api';
import './MovieListPage.css'

export default function MovieListPage({movies}) {

    const movieList = movies.length ? movies.map(movie => (<span class='underline text-yellow-500 hover:text-red-500'>
        <Link to={`/movies/${movie._id}`} key={movie._id} movie={movie}>{movie.title}</Link><br /></span>))
        : <p>Loading</p>;
    // let {movieTitle} = useParams();
    
    // const [movie, setMovie] = useState([])
    // useEffect(function() {
    //   async function getMovie() {
    //     const movie = await moviesAPI.getById({movie})
    //     setMovie(movie)
    //   }
    //   getMovie();
    // }, []);

    return (
        <>
            <h1 class='text-6xl mb-5'>Movies</h1>
            {movieList}
        </>
    )
}