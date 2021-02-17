import React, { useEffect, useState } from 'react';

import { getModels } from '../services/catalogue';

import AddModelForm from './modals/AddModelModal';
import AddNewButton from './buttons/AddNewButton';

function Models() {
	const [models, setModels] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => refreshModelsList(), []);

	const refreshModelsList = () => {
		setIsLoading(true);
		getModels()
			.then((res) => setModels(res))
			.then(() => console.log('models result', models))
			.then(() => setIsLoading(false));
	};

	return (
		<div className='models main-container'>
			<div className='table-container'>
				{models.length > 0 || isLoading ? (
					<div className='data-table'>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>Назва моделі</th>
									<th scope='col'>Тканина</th>
									<th scope='col'>Кількість тканини (в кв.м)</th>
									<th scope='col'>Фурнітура</th>
									<th scope='col'>Кількість фурнітури (в шт.)</th>
									<th scope='col'>Вартість роботи</th>
									<th scope='col'>Загальна вартість виробу</th>
								</tr>
							</thead>
							<tbody>
								{models.map((accessory, index) => {
									const {
										title,
										fabric_title,
										fabric_consumption,
										garment_accessories_title,
										garment_accessories_consumption,
										work_rate,
										retail_price,
									} = accessory;

									return (
										<tr key={index}>
											<th scope='row'>{title}</th>
											<td>{fabric_title}</td>
											<td>{fabric_consumption}</td>
											<td>{garment_accessories_title}</td>
											<td>{garment_accessories_consumption}</td>
											<td>${work_rate}</td>
											<td>${retail_price}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<div className='add-new-instance-btn'>
							<AddNewButton
								modalId='#newModelModal'
								text='Додати нову модель'
							/>
						</div>
					</div>
				) : (
					<div className='no-instances-wrapper'>
						<span>В даній базі поки немає моделей</span>
						<AddNewButton modalId='#newModelModal' text='Додати нову модель' />
					</div>
				)}
			</div>
			<AddModelForm onModelAdded={refreshModelsList} />
		</div>
	);
}

export default Models;
