import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import * as moviesAPI from '../../utilities/movies-api';
import CommentList from "../../components/CommentList/CommentList";

export default function MovieDetailPage({movies}) {

    const { id } = useParams();

    const [movie, setMovie] = useState([])
    useEffect(function() {
      async function getMovie() {
        const movie = await moviesAPI.getById(id)
        setMovie(movie)
      }
      getMovie();
    }, []);

    return (
      <>
        <h1>{movie.title}</h1>
        <CommentList movie={movie}/>
      </>
    )

}