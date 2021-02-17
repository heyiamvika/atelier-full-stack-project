import { createGET, createPOST } from './requests';

const EMPLOYEES_URL = 'http://localhost:3000/api/employees';
export const getAllEmployees = () => createGET(EMPLOYEES_URL);
