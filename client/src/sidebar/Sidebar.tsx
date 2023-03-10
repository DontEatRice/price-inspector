import { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
	const [visible, setVisible] = useState(false);
	const hamburger = useRef<HTMLDivElement>(null);
	// useEffect(() => {

	// }, [visible])
	console.log(hamburger);

	return (
		<>
			<div className="sidebar-container">
				<div className="sidebar-hamburger" ref={hamburger} onClick={() => setVisible(true)}>
					<span className="material-symbols-outlined">menu</span>
				</div>
				<div className="sidebar-content">
					<ul>
						<li>
							<Link to="/test">Can your side be crawled?</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</div>
			</div>

			<Outlet />
		</>
	);
}

export default Sidebar;
