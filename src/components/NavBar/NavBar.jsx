import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <Link to="/movies">Movies</Link>
            &nbsp; | &nbsp;
            <Link to="/series">Series</Link>
            &nbsp; | &nbsp;
            Logged in as <span class='text-yellow-500'>{user.name}</span>
            &nbsp; | &nbsp;
            <Link class="text-red-500" to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}