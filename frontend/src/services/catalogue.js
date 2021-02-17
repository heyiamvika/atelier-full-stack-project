import { createGET, createPOST } from './requests';

const MODELS_URL = 'http://localhost:3000/api/models';
const FABRICS_URL = 'http://localhost:3000/api/fabrics';
const ACCESSORIES_URL = 'http://localhost:3000/api/accessories';

export const getModels = () => createGET(MODELS_URL);
export const createNewModel = (modelDetails) =>
	createPOST(MODELS_URL, modelDetails);

export const getFabrics = () => createGET(FABRICS_URL);
export const createNewFabric = (fabricDetails) =>
	createPOST(FABRICS_URL, fabricDetails);

export const getAccessories = () => createGET(ACCESSORIES_URL);
export const createNewAccessory = (accessoryDetails) =>
	createPOST(ACCESSORIES_URL, accessoryDetails);
