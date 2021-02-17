import React, { useState, useEffect } from 'react';

import {
	getFabrics,
	getAccessories,
	createNewModel,
} from '../../services/catalogue';

function AddModelForm(props) {
	const [fabrics, setFabrics] = useState([]);
	const [accessories, setAccessories] = useState([]);
	const [modelDetails, setModelDetails] = useState({
		title: '',
		fabricId: 0,
		fabricConsumption: 0,
		garmentAccessoriesId: 0,
		garmentAccessoriesConsumption: 0,
		laborHours: 0,
		laborCostPerHour: 0,
	});

	useEffect(() => {
		getFabrics().then((res) => setFabrics(res));
	}, []);

	useEffect(() => {
		getAccessories().then((res) => setAccessories(res));
	}, []);

	const changeModelDetail = (key, value) =>
		setModelDetails({ ...modelDetails, [key]: value });

	const submitNewModel = () => {
		createNewModel(modelDetails).then((res) => {
			console.log('model created with res', res);
			props.onModelAdded();
		});
	};

	return (
		<div
			className='modal fade'
			id='newModelModal'
			tabIndex='-1'
			aria-labelledby='exampleModalLabel'
			aria-hidden='true'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title' id='exampleModalLabel'>
							Нова модель
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
								Назва моделі
							</label>
							<input
								type='text'
								className='form-control'
								id='title'
								onChange={(e) => changeModelDetail('title', e.target.value)}
							/>
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='fabrics' className='form-label'>
									Тканина
								</label>
								<select
									className='form-select'
									id='fabrics'
									onChange={(e) =>
										changeModelDetail('fabricId', e.target.value)
									}>
									{fabrics.map((fabric) => (
										<option
											key={fabric.fabric_id}
											value={fabric.fabric_id}
											defaultValue>
											{fabric.title}
										</option>
									))}
								</select>
							</div>
							<div className='col-6'>
								<label htmlFor='fabric-size' className='form-label'>
									Кількість тканини (в кв.м)
								</label>
								<input
									type='number'
									step='0.01'
									min='0'
									className='form-control'
									id='fabric-size'
									onChange={(e) =>
										changeModelDetail('fabricConsumption', e.target.value)
									}
								/>
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='accessories' className='form-label'>
									Фурнітура
								</label>
								<select
									className='form-select'
									id='accessories'
									onChange={(e) =>
										changeModelDetail('garmentAccessoriesId', e.target.value)
									}>
									{accessories.map((accessory) => (
										<option
											key={accessory.garment_accessories_id}
											value={accessory.garment_accessories_id}>
											{accessory.title}
										</option>
									))}
								</select>
							</div>
							<div className='col-6'>
								<label htmlFor='accessories-count' className='form-label'>
									Кількість фурнітури (в шт.)
								</label>
								<input
									type='number'
									min='0'
									className='form-control'
									id='accessories-count'
									onChange={(e) =>
										changeModelDetail(
											'garmentAccessoriesConsumption',
											e.target.value,
										)
									}
								/>
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='labor-hours' className='form-label'>
									Годин роботи
								</label>
								<input
									type='number'
									min='0'
									className='form-control'
									id='labor-hours'
									onChange={(e) =>
										changeModelDetail('laborHours', e.target.value)
									}
								/>
							</div>
							<div className='col-6'>
								<label htmlFor='labor-cost-per-hour' className='form-label'>
									Вартість за годину роботи
								</label>
								<input
									type='number'
									step='0.01'
									min='0'
									className='form-control'
									id='labor-cost-per-hour'
									onChange={(e) =>
										changeModelDetail('laborCostPerHour', e.target.value)
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
							onClick={submitNewModel}
							data-bs-dismiss='modal'>
							Зберігти зміни
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddModelForm;
