import React, { useEffect, useState } from 'react';
import { getFabrics } from '../services/catalogue';

import AddNewButton from './buttons/AddNewButton';
import AddFabricModal from './modals/AddFabricModal';

function Fabrics() {
	const [fabrics, setFabrics] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => refreshFabricsList(), []);

	const refreshFabricsList = () => {
		setIsLoading(true);
		getFabrics()
			.then((res) => {
				console.log('Fabrics result', res);
				setFabrics(res);
			})
			.then(() => console.log('fabrics received', fabrics))
			.then(() => setIsLoading(false));
	};

	return (
		<div className='fabrics main-container'>
			<div className='table-container'>
				{fabrics.length > 0 || isLoading ? (
					<div className='data-table'>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>Назва тканини</th>
									<th scope='col'>Ширина (в кв.м.)</th>
									<th scope='col'>Ціна за кв.м.</th>
									<th scope='col'>Кв.м. в наявності</th>
								</tr>
							</thead>
							<tbody>
								{fabrics.map((accessory, index) => {
									const {
										title,
										width,
										square_meter_price,
										meters_left,
									} = accessory;

									return (
										<tr key={index}>
											<th scope='row'>{title}</th>
											<td>{width}</td>
											<td>{square_meter_price}</td>
											<td>{meters_left}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<div className='add-new-instance-btn'>
							<AddNewButton
								modalId='#newFabricModal'
								text='Додати нову тканину'
							/>
						</div>
					</div>
				) : (
					<div className='no-instances-wrapper'>
						<span>В даній базі поки немає тканин</span>
						<AddNewButton
							modalId='#newFabricModal'
							text='Додати нову тканину'
						/>
					</div>
				)}
			</div>
			<AddFabricModal onFabricAdded={refreshFabricsList} />
		</div>
	);
}

export default Fabrics;
