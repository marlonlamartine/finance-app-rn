import axios from "axios";

const apiClient = axios.create({});

apiClient.defaults.baseURL = 'https://sofit-mobile-challenge.herokuapp.com';

export default apiClient;