import {Link} from 'react-router-dom'
import "./nav.css"

function Nav() {
    return (
        <nav className="nav">
            <ul id="navList">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shopping">Shopping</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/jsondata">JsonData</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;