import { createGET, createPOST } from './requests';

export const getModels = () => createGET('http://localhost:3000/api/models');

const FABRICS_URL = 'http://localhost:3000/api/fabrics';
export const getFabrics = () => createGET(FABRICS_URL);
export const createNewFabric = (fabricDetails) =>
	createPOST(FABRICS_URL, fabricDetails);

const ACCESSORIES_URL = 'http://localhost:3000/api/accessories';
export const getAccessories = () => createGET(ACCESSORIES_URL);
export const createNewAccessory = (accessoryDetails) =>
	createPOST(ACCESSORIES_URL, accessoryDetails);
