import { Link } from "react-router-dom";

export default function SeriesListPage({series}) {

    // const seriesList = series ? series.map(show => (<span class='underline text-yellow-500 hover:text-red-500'>
    //     <Link to={`/series/${show._id}`} key={show._id} show={show}>{show.title}</Link><br /></span>))
    //     : <p>Loading</p>;

    return (
        <>
            <h1>Series</h1>
            <h1>Coming soon</h1>
            {/* {seriesList} */}
        </>
    )
}