import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import * as moviesAPI from '../../utilities/movies-api';
// import CommentList from "../../components/CommentList/CommentList";

export default function MovieDetailPage({movies}) {

    const { id } = useParams();
    const [comment, setComment] = useState(null);
  
    let [movie, setMovie] = useState(null)
    useEffect(function() {
      async function getMovie() {
        let movie = await moviesAPI.getById(id)
        setMovie(movie)
      }
      getMovie();
    }, [id]);

    const commentList = movie ? movie.comments.map(comment => {return (<p>{comment.content}</p>)}) : <p>Loading</p>;

    async function submitComment(evt) {
      evt.preventDefault();
      // setComment(evt.target.value);
      console.log(evt.target.value)
      console.log(comment)
      console.log(movie._id)
      movie = await moviesAPI.addComment(movie._id, comment);
      setMovie(movie);
      console.log(movie.title)
      console.log(comment)
    }

    return (
      movie ? <>
        <h1>{movie.title}</h1>
        <form onSubmit={submitComment}>
          <input type='text' value={comment} onChange={(evt) => setComment(evt.target.value)} name='content'></input>
          <button type="submit">Add Commentary</button>
        </form>
        <h2>Commentary</h2>
        <div>{commentList}</div>
      </>
      : <p>Loading</p>
    )

}