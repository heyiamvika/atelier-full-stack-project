import { createGET, createPOST } from './requests';

const ORDERS_URL = 'http://localhost:3000/api/orders';
export const getOrders = () => createGET(ORDERS_URL);
export const createNewOrder = (orderDetails) => {
	return createPOST(ORDERS_URL, orderDetails);
};
