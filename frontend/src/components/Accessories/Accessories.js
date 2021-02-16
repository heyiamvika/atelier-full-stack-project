import React, { useEffect, useState } from 'react';
import { getAccessories } from '../../services/catalogue';

function Acessories() {
	const [accessories, setAccessories] = useState([]);

	useEffect(() => {
		getAccessories().then((res) => setAccessories(res));
	}, []);

	return (
		<div className='accessories main-container'>
			<div className='table-container'>
				{accessories.length > 0 ? (
					<div className='data-table'></div>
				) : (
					<span>В даній базі поки немає фурнітур</span>
				)}
			</div>
			<button type='button' className='btn btn-primary'>
				Додати нову фурнітуру
			</button>
		</div>
	);
}

export default Acessories;
