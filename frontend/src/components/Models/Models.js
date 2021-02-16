import React, { useEffect, useState } from 'react';
import { getModels } from '../../services/catalogue';

import AddModelForm from '../AddModelForm/AddModelForm';
import AddNewButton from '../buttons/AddNewButton/AddNewButton';

function Models() {
	const [models, setModels] = useState([]);

	/* 	useEffect(() => {
		getModels().then((res) => setModels(res));
	}, []); */

	return (
		<div className='models main-container'>
			<div className='table-container'>
				{models.length > 0 ? (
					<div className='data-table'>
						<div className='add-new-instance-btn'>
							<AddNewButton modalId='#exampleModal' text='+' />
						</div>
					</div>
				) : (
					<div className='no-instances-wrapper'>
						<span>В даній базі поки немає моделей</span>
						<AddNewButton modalId='#exampleModal' text='Додати нову модель' />
					</div>
				)}
			</div>
			<AddModelForm />
		</div>
	);
}

export default Models;
