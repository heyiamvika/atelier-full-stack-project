import React from 'react';

function AddNewButton(props) {
	return (
		<button
			type='button'
			className='btn btn-primary btn-lg'
			data-bs-toggle='modal'
			data-bs-target={props.modalId}>
			{props.text}
		</button>
	);
}

export default AddNewButton;
