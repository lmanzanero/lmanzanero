import { Link } from "gatsby" 
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
 		<nav className="navbar">
			<ul className="navbar-nav">
				<li className="logo">
					<Link to="/" className="header-logo">  
							 <img src="https://res.cloudinary.com/daeq8bixw/image/upload/v1622455008/luis_manzanero_edbee4271a.png" alt="Luis Manzanero"/> 
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/" className="nav-link" activeClassName="active">
					<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fad"
							data-icon="space-station-moon-alt"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							className="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x"
						>
							<g className="fa-group">
								<path
									fill="currentColor"
									d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"
									className="fa-secondary"
								></path>
								<path
									fill="currentColor"
									d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
									className="fa-primary"
								></path>
							</g>
						</svg>
						<span className="link-text">Home</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/about/" className="nav-link" activeClassName="active">
					<svg 
					  id="Layer_1" 
						data-name="Layer 1" 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 128 128" 	
						className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x">
							<path fill="currentColor" className="fa-secondary" className="cls-1" d="M63.99993,6.0564A57.9436,57.9436,0,1,0,121.9436,63.99993,58.00916,58.00916,0,0,0,63.99993,6.0564Zm0,104.44631a46.50272,46.50272,0,1,1,46.50278-46.50278A46.55537,46.55537,0,0,1,63.99993,110.50272Z"/><circle  fill="currentColor" className="fa-secondary" cx="61.48833" cy="39.26524" r="7.74597"/><path fill="currentColor" className="fa-secondary" d="M56.41651,53.95439A4.60509,4.60509,0,0,0,52.616,58.48922h0a4.60348,4.60348,0,0,0,4.60463,4.60463H57.677V88.60052H55.21362a3.94011,3.94011,0,0,0-3.94011,3.94011h0a3.94011,3.94011,0,0,0,3.94011,3.94011H72.78638a3.94011,3.94011,0,0,0,3.94011-3.94011h0a3.94011,3.94011,0,0,0-3.94011-3.94011H70.34982V56.04026A3.97591,3.97591,0,0,0,65.60173,52.14C61.62628,52.92712,56.57417,53.92668,56.41651,53.95439Z"/></svg>
						<span className="link-text">About</span>
					</Link>
				</li>
	
				<li className="nav-item">
					<Link to="/resume/" className="nav-link" activeClassName="active">
					<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><style></style></defs><title>b</title><path 	fill="currentColor" className="fa-secondary" d="M107.85862,1.9495h-65.678A4.582,4.582,0,0,0,38.91975,3.301L13.20025,29.02062a4.57286,4.57286,0,0,0-1.35156,3.26074v85.474a8.30572,8.30572,0,0,0,8.29766,8.29511h87.71227a8.30306,8.30306,0,0,0,8.29268-8.29511V10.24716A8.30532,8.30532,0,0,0,107.85862,1.9495Zm-.932,86.46872v28.41023H21.07336V36.89373H38.49775a8.3037,8.3037,0,0,0,8.29517-8.29523V11.17416h60.13372Z"/><path fill="currentColor" className="fa-secondary" d="M64.82067,103.63479H37.31734a2.15847,2.15847,0,1,0,0,4.31694H64.82067a2.15847,2.15847,0,1,0,0-4.31694Z"/><path fill="currentColor" className="fa-secondary" d="M35.15887,94.235a2.163,2.163,0,0,0,2.15847,2.15853H90.68272a2.15853,2.15853,0,0,0,0-4.31706H37.31734A2.15649,2.15649,0,0,0,35.15887,94.235Z"/><path fill="currentColor" className="fa-secondary" d="M45.33184,53.8263l1.02881,5.30307a6.73963,6.73963,0,0,0,13.23125,0l1.02881-5.30307a7.09933,7.09933,0,0,0-7.03341-8.056H52.36525A7.09933,7.09933,0,0,0,45.33184,53.8263Z"/><path 	fill="currentColor" className="fa-secondary" d="M52.97631,73.53253l-6.89219-6.89219-7.18288,2.55109a2.002,2.002,0,0,0-1.28842,1.47043l-2.454,11.549H70.79369l-2.454-11.549a2.00193,2.00193,0,0,0-1.28842-1.47043l-7.18288-2.55109Z"/></svg>
						<span className="link-text">Resume</span>
					</Link>
				</li>
	
				<li className="nav-item">
					<Link to="/projects/" className="nav-link" activeClassName="active">
					<svg
							aria-hidden="true"
							focusable="false"
							data-prefix="fad"
							data-icon="space-shuttle"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
							className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
						>
							<g className="fa-group">
								<path
									fill="currentColor"
									d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
									className="fa-secondary"
								></path>
								<path
									fill="currentColor"
									d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
									className="fa-primary"
								></path>
							</g>
						</svg>
						<span className="link-text">Projects</span>
					</Link>
				</li>
	
				<li className="nav-item">
					<Link to="/blog/" className="nav-link" activeClassName="active">
						<svg 
								xmlns="http://www.w3.org/2000/svg" 
						    viewBox="0 0 64 64" 
								width="512" 
								height="512"><g id="Outline"><g><circle cx="7" cy="7" r="1"/><circle cx="11" cy="7" r="1"/><circle cx="15" cy="7" r="1"/><path fill="currentColor" className="fa-secondary" d="M24,6a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M39,6a1,1,0,0,0,0,2H54a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M61,36a1,1,0,0,0-1,1V60H4V24a1,1,0,0,0-2,0V61a1,1,0,0,0,1,1H61a1,1,0,0,0,1-1V37A1,1,0,0,0,61,36Z"/><path fill="currentColor" className="fa-secondary" d="M61,2H3A1,1,0,0,0,2,3V20a1,1,0,0,0,2,0V12H57a1,1,0,0,0,0-2H20V4H60V33a1,1,0,0,0,2,0V3A1,1,0,0,0,61,2ZM18,10H4V4H18Z"/><path fill="currentColor" className="fa-secondary" d="M57,16a1,1,0,0,0-1-1H8a1,1,0,0,0-1,1V34a1,1,0,0,0,1,1H56a1,1,0,0,0,1-1ZM47,18a1,1,0,1,1-1-1A1,1,0,0,1,47,18ZM14,30a1,1,0,0,1-1-1,6.19,6.19,0,0,1,1-2.92A6.19,6.19,0,0,1,15,29,1,1,0,0,1,14,30Zm4.62,3L24,22.24,29.38,33Zm13,0-2.5-5L31,24.24,35.38,33ZM40,30a1,1,0,0,1-1-1,6.19,6.19,0,0,1,1-2.92A6.19,6.19,0,0,1,41,29,1,1,0,0,1,40,30Zm8,0a1,1,0,0,1-1-1,6.19,6.19,0,0,1,1-2.92A6.19,6.19,0,0,1,49,29,1,1,0,0,1,48,30Zm7,3H49V31.82A3,3,0,0,0,51,29c0-1.16-.94-5-3-5s-3,3.84-3,5a3,3,0,0,0,2,2.82V33H41V31.82A3,3,0,0,0,43,29c0-1.16-.94-5-3-5s-3,3.84-3,5a3,3,0,0,0,2,2.82V33H37.62L31.89,21.55a1,1,0,0,0-1.78,0L28,25.76l-3.11-6.21a1,1,0,0,0-1.78,0L16.38,33H15V31.82A3,3,0,0,0,17,29c0-1.16-.94-5-3-5s-3,3.84-3,5a3,3,0,0,0,2,2.82V33H9V17H43.18a3,3,0,1,0,5.64,0H55Z"/><circle cx="41" cy="20" r="1"/><circle cx="44" cy="23" r="1"/><circle cx="50" cy="22" r="1"/><path fill="currentColor" className="fa-secondary" d="M30,38H16a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M30,42H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M30,46H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M30,50H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M30,54H9a1,1,0,0,0,0,2H30a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M34,48h8a1,1,0,0,0,1-1V39a1,1,0,0,0-1-1H34a1,1,0,0,0-1,1v8A1,1,0,0,0,34,48Zm7-8v6H35V44h3a1,1,0,0,0,0-2H35V40Z"/><path fill="currentColor" className="fa-secondary" d="M56,38H48a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M56,42H46a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M56,46H46a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M56,50H34a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M56,54H34a1,1,0,0,0,0,2H56a1,1,0,0,0,0-2Z"/><path fill="currentColor" className="fa-secondary" d="M15.42,19.18a3.07,3.07,0,0,0-3.54.53,1,1,0,0,0,1.41,1.41,1,1,0,0,1,1.42,0,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,1,1.42,0,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41A3,3,0,0,0,15.42,19.18Z"/></g></g></svg>
						<span className="link-text">Blog</span>
					</Link>
				</li>
	
				<li className="nav-item" id="socialMediaIcons">
				    <a href="https://github.com/lmanzanero" target="_blank" className="nav-link">
							<svg viewBox="0 0 512 512"><path className="fa-secondary" d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"/></svg>
				    </a>
						<a href="https://www.instagram.com/manzanero.luis1995/" target="_blank" className="nav-link">
					   	<svg viewBox="0 0 512 512"><g><path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"/><path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"/><circle cx="351.5" cy="160.5" r="21.5"/></g></svg>
				    </a>
						<a href="https://www.linkedin.com/in/luis-manzanero/" target="_blank" className="nav-link">
							<svg viewBox="0 0 512 512"><path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"/></svg>
				    </a>
				</li>
			</ul>
		</nav>
  </header>
);

export default Header;
