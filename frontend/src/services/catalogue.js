import { createGET, createPOST } from './requests';

export const getModels = () => createGET('http://localhost:3000/api/models');
export const getFabrics = () => createGET('http://localhost:3000/api/fabrics');

const ACCESSORIES_URL = 'http://localhost:3000/api/accessories';
export const getAccessories = () => createGET(ACCESSORIES_URL);
export const createNewAccessory = (accessoryDetails) => {
	createPOST(ACCESSORIES_URL, accessoryDetails);
};
