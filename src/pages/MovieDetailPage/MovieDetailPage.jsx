import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";
import * as moviesAPI from '../../utilities/movies-api';
import './MovieDetailPage.css'

// import CommentList from "../../components/CommentList/CommentList";

export default function MovieDetailPage({movies, user, setUser}) {

    const { id } = useParams();
    const [newComment, setNewComment] = useState("");
    const [commentToEdit, setCommentToEdit] = useState("");
    const [updateCommentId, setUpdateCommentId] = useState("");

    let [movie, setMovie] = useState(null)
    useEffect(function() {
      async function getMovie() {
        let movie = await moviesAPI.getById(id)
        setMovie(movie)
      }
      getMovie();
    }, [id]);

    const commentList = movie ? movie.comments.map(comment => {
      return (
      <div key={comment._id}>
        <h3 class="text-red-800">trekkie: {comment.user.name }</h3>
        {user._id === comment.user._id ? <>
          <p>{comment.content}</p>
          {/* <form onSubmit={editComment}>
            <input type="textarea" value={commentToEdit} onChange={(evt) => setCommentToEdit(evt.target.value)} name='content'></input>
            <button onClick={() => handleUpdate(comment._id)} type="submit">Edit this comment</button>
          </form> */}
          <button onClick={() => handleDelete(comment._id)}>Delete this comment</button>
        </>
        : <p>{comment.content}</p>
        }
      </div>
      )}) 
      : <p>Loading</p>;

    async function submitComment(evt) {
      evt.preventDefault();
      movie = await moviesAPI.addComment(movie._id, newComment);
      setMovie(movie);
    }

    function handleUpdate(id) {
      setUpdateCommentId(id);
    }

    async function handleDelete(id) {
      movie = await moviesAPI.removeComment(id)
      setMovie(movie);
    }

    async function editComment(evt) {
      evt.preventDefault();
      // movie = await moviesAPI.updateComment(updateCommentId, commentToEdit);
      // setMovie(movie);
    }

    return (
      movie ? <>
        <h1>{movie.title}</h1>
        <form onSubmit={submitComment}>
          <input type='textarea' value={newComment} onChange={(evt) => setNewComment(evt.target.value)} name='content'></input>
          <button type="submit">Add Commentary</button>
        </form>
        <h2>Commentary</h2>
        <div>{commentList}</div>
      </>
      : <p>Loading</p>
    )

}