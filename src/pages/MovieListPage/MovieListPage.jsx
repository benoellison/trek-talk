import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as moviesAPI from '../../utilities/movies-api';

export default function MovieListPage({movies}) {

    const movieList = movies.length ? movies.map(movie => (
        <Link to={`/movies/${movie._id}`} key={movie._id} movie={movie}>{movie.title}</Link>))
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
            <h1>Movies</h1>
            {movieList}
        </>
    )
}