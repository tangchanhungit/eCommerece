import axios from "axios"

const API_URL = 'http://localhost:8000/api';

export const getUsers = () => axios.get('${API_URL}/users');
export const getUser = ($id) => axios.get('${API_URL}/users/${id}'); 
export const createUser = (data) => axios.post('${API_URL}/users', data);
export const updateUser = (id,data) => axios.put('${API_URL}/users/${id}', data);
export const destroyUser = (id) => axios.delete('${API_URL}/users/${id}');