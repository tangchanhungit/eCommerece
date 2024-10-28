import axios from "axios"

const API_URL = 'http://localhost:8000/api';

export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUser = (id) => axios.get(`${API_URL}/user/${id}`);
export const createUser = (data) => axios.post(`${API_URL}/user`, data);
export const updateUser = (id, data) => axios.put(`${API_URL}/user/${id}`, data);
export const destroyUser = (id) => axios.delete(`${API_URL}/user/${id}`);
