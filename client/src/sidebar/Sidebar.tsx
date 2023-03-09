import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div className="sidebar-container">
            <ul>
                <li>
                    <Link to="/test">Can your side be crawled?</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar