import React, { useEffect, useState } from 'react';
import { getModels } from '../../services/catalogue';

function Models() {
	const [models, setModels] = useState([]);

	useEffect(() => {
		getModels().then((res) => setModels(res));
	}, []);

	return (
		<div className='models main-container'>
			<div className='table-container'>
				{models.length > 0 ? (
					<div className='data-table'></div>
				) : (
					<span>В даній базі поки немає моделей</span>
				)}
			</div>
			<button type='button' class='btn btn-primary'>
				Додати нову модель
			</button>
		</div>
	);
}

export default Models;
