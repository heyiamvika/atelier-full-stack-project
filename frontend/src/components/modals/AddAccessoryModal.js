import React, { useState } from 'react';
import { createNewAccessory } from '../../services/catalogue';

function AddAccessoryModal(props) {
	const [accessoriesDetails, setAccessoriesDetails] = useState({
		title: '',
		pricePerItem: 0,
		itemsLeft: 0,
	});

	const changeTitle = (newTitle) =>
		setAccessoriesDetails({ ...accessoriesDetails, title: newTitle });

	const changePrice = (newPrice) =>
		setAccessoriesDetails({ ...accessoriesDetails, pricePerItem: newPrice });

	const changeItemsLeft = (newItemsLeftCount) =>
		setAccessoriesDetails({
			...accessoriesDetails,
			itemsLeft: newItemsLeftCount,
		});

	const submitNewAccessory = () => {
		createNewAccessory(accessoriesDetails).then((res) => {
			console.log('accessory created with res', res);
			props.onAccessoryAdded();
		});
	};

	return (
		<div className='modal fade' id='newAccessoryModal' tabIndex='-1'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Нова фурнітура
						</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'></button>
					</div>
					<div className='modal-body'>
						<div className='mb-3'>
							<label htmlFor='title' className='form-label'>
								Назва фурнітури
							</label>
							<input
								type='text'
								className='form-control'
								id='title'
								onChange={(e) => changeTitle(e.target.value)}
							/>
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='price-per-item' className='form-label'>
									Ціна за шт.
								</label>
								<input
									type='number'
									step='0.01'
									className='form-control'
									id='price-per-item'
									onChange={(e) => changePrice(Math.round(e.target.value), 2)}
								/>
							</div>
							<div className='col-6'>
								<label
									htmlFor='accessories-count-at-warehouse'
									className='form-label'>
									Шт. в наявності
								</label>
								<input
									type='number'
									className='form-control'
									id='accessories-count-at-warehouse'
									onChange={(e) => changeItemsLeft(Math.floor(e.target.value))}
								/>
							</div>
						</div>
					</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'>
							Закрити
						</button>
						<button
							type='button'
							className='btn btn-primary'
							onClick={submitNewAccessory}
							data-bs-dismiss='modal'>
							Зберігти зміни
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddAccessoryModal;
