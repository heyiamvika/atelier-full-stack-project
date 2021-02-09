import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import Catalogue from './pages/Catalogue';
import Orders from './pages/Orders';
import Employees from './pages/Employees';

function App() {
	return (
		<Router>
			<div className='App'>
				<header>
					<nav className='navbar navbar-expand-lg navbar-light bg-light'>
						<div className='container-fluid'>
							<NavLink to='/' className='navbar-brand'>
								Ател'є з пошиву одягу
							</NavLink>
							<button
								className='navbar-toggler'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#navbarNav'
								aria-controls='navbarNav'
								aria-expanded='false'
								aria-label='Toggle navigation'>
								<span className='navbar-toggler-icon'></span>
							</button>
							<div className='collapse navbar-collapse' id='navbarNav'>
								<ul className='navbar-nav'>
									<li className='nav-item'>
										<NavLink
											to='/catalogue'
											className='nav-link'
											aria-current='page'>
											Каталог
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink to='/orders' className='nav-link'>
											Замовлення
										</NavLink>
									</li>
									<li className='nav-item'>
										<NavLink to='/employees' className='nav-link'>
											Співробітники
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>

				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route path='/catalogue'>
						<Catalogue />
					</Route>
					<Route path='/orders'>
						<Orders />
					</Route>
					<Route path='/employees'>
						<Employees />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
