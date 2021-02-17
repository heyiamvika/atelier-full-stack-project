import React, { useState, useEffect } from 'react';

import { getAllEmployees } from '../../services/employees';
import { getModels } from '../../services/catalogue';
import { createNewOrder } from '../../services/orders';

function AddOrderModal(props) {
	const [models, setModels] = useState([]);
	const [employees, setEmployees] = useState([]);
	const [orderDetails, setOrderDetails] = useState({
		clientName: '',
		modelId: 0,
		employeeId: 0,
		orderDate: '',
		isPaid: false,
		orderNote: '',
	});

	useEffect(() => {
		getModels().then((res) => setModels(res));
	}, []);

	useEffect(() => {
		getAllEmployees().then((res) => setEmployees(res));
	}, []);

	const changeOrderDetail = (key, value) =>
		setOrderDetails({ ...orderDetails, [key]: value });

	const submitNewOrder = () => {
		console.log('new order', orderDetails);
		createNewOrder(orderDetails).then((res) => {
			console.log('order created with res', res);

			props.onOrderCreated();
		});
	};

	return (
		<div className='modal fade' id='newOrderModal' tabIndex='-1'>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Нове замовлення</h5>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'></button>
					</div>
					<div className='modal-body'>
						<div className='mb-3'>
							<label htmlFor='client-name' className='form-label'>
								П.І.Б. клієнта
							</label>
							<input
								type='text'
								className='form-control'
								id='client-name'
								onChange={(e) =>
									changeOrderDetail('clientName', e.target.value)
								}
							/>
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='model' className='form-label'>
									Модель
								</label>
								<select
									className='form-select'
									id='model'
									onChange={(e) =>
										changeOrderDetail('modelId', e.target.value)
									}>
									{models.map((model) => (
										<option
											key={model.model_id}
											value={model.model_id}
											defaultValue>
											{model.title}
										</option>
									))}
								</select>
							</div>
							<div className='col-6'>
								<label htmlFor='employee' className='form-label'>
									Співробітниця / співробітник
								</label>
								<select
									className='form-select'
									id='employee'
									onChange={(e) =>
										changeOrderDetail('employeeId', e.target.value)
									}>
									{employees.map((employee) => (
										<option
											key={employee.employee_id}
											value={employee.employee_id}
											defaultValue>
											{employee.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-12'>
								<label htmlFor='order-date' className='form-label'>
									Дата замовлення
								</label>
								<input
									type='date'
									className='form-control'
									id='order-date'
									onChange={(e) =>
										changeOrderDetail('orderDate', e.target.value)
									}
								/>
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-12'>
								<label htmlFor='order-notes' className='form-label'>
									Нотатки
								</label>
								<div className='form-floating'>
									<textarea
										className='form-control'
										placeholder='Введіть нотатки до замовлення'
										id='floatingTextarea'
										onChange={(e) =>
											changeOrderDetail('orderNote', e.target.value)
										}></textarea>
									<label htmlFor='floatingTextarea'>
										Введіть нотатки до замовлення
									</label>
								</div>
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-4 ml-1'>
								<div className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										id='is-paid-checkbox'
										onChange={(e) =>
											changeOrderDetail('isPaid', e.target.checked)
										}
									/>
									<label
										className='form-check-label'
										htmlFor='is-paid-checkbox'>
										Оплачено
									</label>
								</div>
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
							onClick={submitNewOrder}
							data-bs-dismiss='modal'>
							Зберігти зміни
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddOrderModal;
