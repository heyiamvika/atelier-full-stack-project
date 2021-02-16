import React, { useState } from 'react';

function AddFabricModal() {
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
							<input type='text' className='form-control' id='title' />
						</div>
						<div className='row mb-3'>
							<div className='col-4'>
								<label htmlFor='fabric-width' className='form-label'>
									Ширина (в кв.м.)
								</label>
								<input type='text' className='form-control' id='fabric-width' />
							</div>
							<div className='col-4'>
								<label htmlFor='fabric-size' className='form-label'>
									Ціна за кв.м.
								</label>
								<input type='text' className='form-control' id='fabric-size' />
							</div>
							<div className='col-4'>
								<label
									htmlFor='fabric-count-at-warehouse'
									className='form-label'>
									Кв.м. в наявності
								</label>
								<input
									type='text'
									className='form-control'
									id='fabric-count-at-warehouse'
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

export default AddFabricModal;
