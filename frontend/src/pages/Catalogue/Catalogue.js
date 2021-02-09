import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	useRouteMatch,
} from 'react-router-dom';

import Models from '../../components/Models/Models';
import Fabrics from '../../components/Fabrics/Fabrics';
import Accessories from '../../components/Accessories/Accessories';

function Catalogue() {
	let { path, url } = useRouteMatch();

	return (
		<div className='catalogue'>
			<div className='page-heading'>
				<h2>Каталог</h2>
			</div>
			<ul className='nav nav-tabs'>
				<li className='nav-item'>
					<NavLink to={`${url}/models`} className='nav-link'>
						Моделі
					</NavLink>
				</li>
				<li className='nav-item dropdown'>
					<NavLink to={`${url}/fabrics`} className='nav-link'>
						Тканини
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink to={`${url}/accessories`} className='nav-link'>
						Фурнітура
					</NavLink>
				</li>
			</ul>

			<Switch>
				<Route path={`${path}/models`}>
					<Models />
				</Route>
				<Route path={`${path}/fabrics`}>
					<Fabrics />
				</Route>
				<Route path={`${path}/accessories`}>
					<Accessories />
				</Route>
			</Switch>
		</div>
	);
}

export default Catalogue;
