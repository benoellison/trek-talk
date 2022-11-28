import { useParams } from "react-router-dom";
export default function MovieListPage({movies}) {

    const movieList = movies.length ? movies.map(movie => <p>{movie.title}</p>) : <p>Loading</p>;
    let {movieTitle} = useParams();

    return (
        <>
            <h1>Movies</h1>
            {movieList}
        </>
    )
}