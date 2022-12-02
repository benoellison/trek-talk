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
      <div class='m-5' key={comment._id}>
        <h3 class="mb-1">trekkie: <span class='text-yellow-500'>{comment.user.name}</span></h3>
        {user._id === comment.user._id ? <>
          <p class='text-xl font-bold text-red-500'>{comment.content}</p>
          <form onSubmit={editComment}>
            <input type="textarea" value={commentToEdit} onChange={(evt) => setCommentToEdit(evt.target.value)} name='content'></input>
            <button onClick={() => handleUpdate(comment._id)} type="submit">Edit this comment</button>
          </form>
          <button onClick={() => handleDelete(comment._id)}>Delete this comment</button>
        </>
        : <p class='text-xl font-bold text-red-500'>{comment.content}</p>
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
      console.log(id)
    }

    async function handleDelete(id) {
      movie = await moviesAPI.removeComment(id)
      setMovie(movie);
    }

    async function editComment(evt) {
      evt.preventDefault();
      console.log('preparing to send')
      // movie = await moviesAPI.updateComment(updateCommentId, commentToEdit);
      // setMovie(movie);
    }

    return (
      movie ? <>
        <h1 class='text-5xl text-yellow-500 mb-5'>{movie.title}</h1>
        <h2 class='text-4xl mb-3'>Commentary</h2>
        <div>{commentList}</div>
        <form class='flex items-center justify-center' onSubmit={submitComment}>
          <div class='flex items-center justify-center'>
          <input class='' type='textarea' value={newComment} onChange={(evt) => setNewComment(evt.target.value)} name='content'></input>
          <button class='' type="submit">Add Commentary</button>
          </div>
        </form>
      </>
      : <p>Loading</p>
    )

}