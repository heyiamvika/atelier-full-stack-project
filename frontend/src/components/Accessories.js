import React, { useEffect, useState } from 'react';
import { getAccessories } from '../services/catalogue';

import AddNewButton from './buttons/AddNewButton';
import AddAccessoryModal from './modals/AddAccessoryModal';

function Acessories() {
	const [accessories, setAccessories] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => refreshAccessoriesList(), []);

	const refreshAccessoriesList = () => {
		setIsLoading(true);
		getAccessories()
			.then((res) => setAccessories(res))
			.then(() => console.log('accessories', accessories))
			.then(() => setIsLoading(false));
	};

	return (
		<div className='accessories main-container'>
			<div className='table-container'>
				{accessories.length > 0 || isLoading ? (
					<div className='data-table'>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>Назва фурнітури</th>
									<th scope='col'>Ціна за шт.</th>
									<th scope='col'>Шт. в наявності</th>
								</tr>
							</thead>
							<tbody>
								{accessories.map((accessory, index) => {
									const { title, items_left, price_per_item } = accessory;

									return (
										<tr key={index}>
											<th scope='row'>{title}</th>
											<td>{price_per_item}</td>
											<td>{items_left}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<div className='add-new-instance-btn'>
							<AddNewButton
								modalId='#newAccessoryModal'
								text='Додати нову фурнітуру'
							/>
						</div>
					</div>
				) : (
					<div className='no-instances-wrapper'>
						<span>В даній базі поки немає фурнітур</span>
						<AddNewButton
							modalId='#newAccessoryModal'
							text='Додати нову фурнітуру'
						/>
					</div>
				)}
			</div>
			<AddAccessoryModal onAccessoryAdded={refreshAccessoriesList} />
		</div>
	);
}

export default Acessories;
