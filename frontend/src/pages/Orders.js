import React, { useEffect, useState } from 'react';

import { getOrders } from '../services/orders';
import AddNewButton from '../components/buttons/AddNewButton';
import AddOrderModal from '../components/modals/AddOrderModal';

function Orders() {
	const [orders, setOrders] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => refreshOrdersList(), []);

	getOrders().then((res) => console.log(res));

	const refreshOrdersList = () => {
		setIsLoading(true);
		getOrders()
			.then((res) => setOrders(res))
			.then(() => console.log('orders result', orders))
			.then(() => setIsLoading(false));
	};

	return (
		<div className='orders main-container'>
			<div className='table-container'>
				{orders.length > 0 || isLoading ? (
					<div className='data-table'>
						<table className='table'>
							<thead>
								<tr>
									<th scope='col'>Id замовлення</th>
									<th scope='col'>П.І.Б. клієнта</th>
									<th scope='col'>Назва моделі</th>
									<th scope='col'>П.І.Б. співробітника</th>
									<th scope='col'>Дата замовлення</th>
									<th scope='col'>Дата примірки</th>
									<th scope='col'>Дата виконання</th>
									<th scope='col'>Оплачено</th>
									<th scope='col'>Коментарі</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => {
									const {
										client_name,
										employee_id,
										employee_name,
										fitting_date,
										fulfillment_date,
										is_paid,
										model_id,
										model_title,
										order_date,
										order_id,
										order_note,
									} = order;

									const orderDate = new Date(order_date).toLocaleDateString();
									const fittingDate = fitting_date
										? new Date(fitting_date).toLocaleDateString()
										: '-';
									const fulfillmentDate = fulfillment_date
										? new Date(fulfillment_date).toLocaleDateString()
										: '-';

									return (
										<tr key={order_id}>
											<th scope='row'>{order_id}</th>
											<td>{client_name}</td>
											<td>{model_title}</td>
											<td>{employee_name}</td>
											<td>{orderDate}</td>
											<td>{fittingDate}</td>
											<td>{fulfillmentDate}</td>
											<td>{is_paid ? '+' : '-'}</td>
											<td>{order_note || '-'}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<div className='add-new-instance-btn'>
							<AddNewButton
								modalId='#newOrderModal'
								text='Додати нове замовлення'
							/>
						</div>
					</div>
				) : (
					<div className='no-instances-wrapper'>
						<span>В даній базі поки немає замовлень</span>
						<AddNewButton
							modalId='#newOrderModal'
							text='Додати нове замовлення'
						/>
					</div>
				)}
			</div>
			<AddOrderModal onOrderCreated={refreshOrdersList} />
		</div>
	);
}

export default Orders;
