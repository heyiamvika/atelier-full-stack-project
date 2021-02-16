import React, { useState } from 'react';

function AddModelForm() {
	const [fabrics, setFabrics] = useState([]);
	const [accessories, setAccessories] = useState([]);

	// TO_DO: fetch fabrics here
	// TO_DO: fetch accessories here

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
							<input type='text' className='form-control' id='title' />
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='fabrics' className='form-label'>
									Тканина
								</label>
								<select className='form-select' id='fabrics'>
									{fabrics.map((fabric) => (
										<option defaultValue>{fabric.title}</option>
									))}
									{/* <option selected>Тканина один</option>
							<option value='1'>два</option>
							<option value='2'>три</option>
							<option value='3'>чотири</option> */}
								</select>
							</div>
							<div className='col-6'>
								<label htmlFor='fabric-size' className='form-label'>
									Кількість тканини (в кв.м)
								</label>
								<input type='text' className='form-control' id='fabric-size' />
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='accessories' className='form-label'>
									Фурнітура
								</label>
								<select className='form-select' id='accessories'>
									{accessories.map((accessory) => (
										<option defaultValue>{accessory.title}</option>
									))}
								</select>
							</div>
							<div className='col-6'>
								<label htmlFor='accessories-count' className='form-label'>
									Кількість фурнітури (в шт.)
								</label>
								<input
									type='text'
									className='form-control'
									id='accessories-count'
								/>
							</div>
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='labor-hours' className='form-label'>
									Годин роботи
								</label>
								<input type='text' className='form-control' id='labor-hours' />
							</div>
							<div className='col-6'>
								<label htmlFor='labor-cost-per-hour' className='form-label'>
									Вартість за годину роботи
								</label>
								<input
									type='text'
									className='form-control'
									id='labor-cost-per-hour'
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
							onClick={() => console.log('Save changes')}
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
