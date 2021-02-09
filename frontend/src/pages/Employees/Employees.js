import React, { useEffect, useState } from 'react';

import { getAllEmployees } from '../../services/employees';

import './Employees.css';

function Employees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		getAllEmployees().then((res) => setEmployees(res));
	}, []);

	console.log('employees', employees);

	return (
		<div className='employees'>
			<div className='page-heading'>
				<h2>Співробітники</h2>
			</div>
			<div className='employees-table'>
				<table className='table'>
					<thead>
						<tr>
							<th scope='col'>Id співробітника</th>
							<th scope='col'>ПІБ</th>
							<th scope='col'>Кількість замовлень</th>
						</tr>
					</thead>
					<tbody>
						{employees.map((employee) => {
							console.log(employee);
							const { employee_id, name, orders_count } = employee;

							return (
								<tr>
									<th scope='row'>{employee_id}</th>
									<td>{name}</td>
									<td>{orders_count}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Employees;
