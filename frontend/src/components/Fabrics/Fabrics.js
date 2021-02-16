import React, { useEffect, useState } from 'react';
import { getFabrics } from '../../services/catalogue';

import AddNewButton from '../buttons/AddNewButton/AddNewButton';
import AddFabricModal from '../modals/AddFabricModal';

function Fabrics() {
	const [fabrics, setFabrics] = useState([]);

	// useEffect(() => {
	// 	getFabrics().then((res) => setFabrics(res));
	// }, []);

	return (
		<div className='fabrics main-container'>
			<div className='table-container'>
				{fabrics.length > 0 ? (
					<div className='data-table'>
						<div className='add-new-instance-btn'>
							<AddNewButton modalId='#newFabricModal' text='+' />
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
			<AddFabricModal />
		</div>
	);
}

export default Fabrics;
