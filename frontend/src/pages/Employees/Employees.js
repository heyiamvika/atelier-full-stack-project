import React, { useEffect, useState } from 'react';

import { getAllEmployees } from '../../services/employees';

function Employees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		getAllEmployees().then((res) => setEmployees(res));
	}, []);

	return (
		<div className='employees'>
			<div className='page-heading'>
				<h2>Співробітники</h2>
			</div>
			<div className='employees-table'>
				{employees.map((employee) => (
					<span key={employee.id}>{employee.name}</span>
				))}
			</div>
		</div>
	);
}

export default Employees;
