import React, { useEffect, useState } from 'react';

import { getAllEmployees } from '../services/employees';

function Employees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => refreshEmployeesList(), []);

	const refreshEmployeesList = () => {
		getAllEmployees()
			.then((res) => setEmployees(res))
			.then(() => console.log('employees result', employees));
	};

	return (
		<div className='employees'>
			<div className='page-heading'>
				<h2>Співробітники</h2>
			</div>
			<div className='main-container'>
				<div className='table-container'>
					<div className='data-table'>
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
									const { employee_id, name, orders_count } = employee;

									return (
										<tr key={employee_id}>
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
			</div>
		</div>
	);
}

export default Employees;
