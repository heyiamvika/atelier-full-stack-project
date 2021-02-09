import React, { useEffect, useState } from 'react';
import { getFabrics } from '../../services/catalogue';

function Fabrics() {
	const [fabrics, setFabrics] = useState([]);

	useEffect(() => {
		getFabrics().then((res) => setFabrics(res));
	}, []);

	return (
		<div className='fabrics main-container'>
			<div className='table-container'>
				{fabrics.length > 0 ? (
					<div className='data-table'></div>
				) : (
					<span>В даній базі поки немає тканин</span>
				)}
			</div>
			<button type='button' class='btn btn-primary'>
				Додати нову тканину
			</button>
		</div>
	);
}

export default Fabrics;
