import React, { useState } from 'react';

import { createNewFabric } from '../../services/catalogue';

function AddFabricModal(props) {
	const [fabricDetails, setFabricDetails] = useState({
		title: '',
		width: 0,
		squareMeterPrice: 0,
		metersLeft: 0,
	});

	const changeTitle = (newTitle) =>
		setFabricDetails({ ...fabricDetails, title: newTitle });

	const changeWidth = (newWidth) =>
		setFabricDetails({ ...fabricDetails, width: newWidth });

	const changeSquareMeterPrice = (newSquareMeterPrice) =>
		setFabricDetails({
			...fabricDetails,
			squareMeterPrice: newSquareMeterPrice,
		});

	const changeMetersLeft = (newMetersLeftValue) =>
		setFabricDetails({
			...fabricDetails,
			metersLeft: newMetersLeftValue,
		});

	const submitNewFabric = () => {
		createNewFabric(fabricDetails).then((res) => {
			console.log('fabric created with res', res);
			props.onFabricAdded();
		});
	};

	return (
		<div
			className='modal fade'
			id='newFabricModal'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Нова тканина
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
								Назва тканини
							</label>
							<input
								type='text'
								className='form-control'
								id='title'
								onChange={(e) => changeTitle(e.target.value)}
							/>
						</div>
						<div className='row mb-3'>
							<div className='col-4'>
								<label htmlFor='fabric-width' className='form-label'>
									Ширина (в кв.м.)
								</label>
								<input
									type='number'
									step='0.01'
									className='form-control'
									id='fabric-width'
									onChange={(e) => changeWidth(Math.round(e.target.value), 2)}
								/>
							</div>
							<div className='col-4'>
								<label htmlFor='fabric-price' className='form-label'>
									Ціна за кв.м.
								</label>
								<input
									type='number'
									step='0.01'
									className='form-control'
									id='fabric-price'
									onChange={(e) =>
										changeSquareMeterPrice(Math.round(e.target.value), 2)
									}
								/>
							</div>
							<div className='col-4'>
								<label
									htmlFor='fabric-count-at-warehouse'
									className='form-label'>
									Кв.м. в наявності
								</label>
								<input
									type='number'
									step='0.01'
									className='form-control'
									id='fabric-count-at-warehouse'
									onChange={(e) =>
										changeMetersLeft(Math.round(e.target.value), 2)
									}
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
							onClick={submitNewFabric}
							data-bs-dismiss='modal'>
							Зберігти зміни
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddFabricModal;
