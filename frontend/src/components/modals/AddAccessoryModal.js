import React, { useState } from 'react';

function AddAccessoryModal() {
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
							<input type='text' className='form-control' id='title' />
						</div>
						<div className='row mb-3'>
							<div className='col-6'>
								<label htmlFor='price-per-item' className='form-label'>
									Ціна за шт.
								</label>
								<input
									type='text'
									className='form-control'
									id='price-per-item'
								/>
							</div>
							<div className='col-6'>
								<label
									htmlFor='accessories-count-at-warehouse'
									className='form-label'>
									Шт. в наявності
								</label>
								<input
									type='text'
									className='form-control'
									id='accessories-count-at-warehouse'
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

export default AddAccessoryModal;
