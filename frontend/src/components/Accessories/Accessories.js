import React, { useEffect, useState } from 'react';
import { getAccessories } from '../../services/catalogue';

import AddNewButton from '../buttons/AddNewButton/AddNewButton';
import AddAccessoryModal from '../modals/AddAccessoryModal';

function Acessories() {
	const [accessories, setAccessories] = useState([]);

	useEffect(() => {
		getAccessories().then((res) => setAccessories(res));
	}, []);

	return (
		<div className='accessories main-container'>
			<div className='table-container'>
				{accessories.length > 0 ? (
					<div className='data-table'>
						<div className='add-new-instance-btn'>
							<AddNewButton modalId='#newAccessoryModal' text='+' />
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
			<AddAccessoryModal />
		</div>
	);
}

export default Acessories;
