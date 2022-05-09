import axios from 'axios';
import authHeader from '../auth-header/authHeader';

const API_URL = 'http://localhost:8081/';

axios.interceptors.request.use(
  config => {
    config.headers.authorization = authHeader();
    return config;
  },
  error => {
    return Promise.reject(error);
  } 
);

const getGondolas = () => {
    return axios
    .get(API_URL + 'gondola')
    .then((response) => {
      return response.data;
    });
};

const addGondola = (apiaryId) => {
    return axios
      .post(API_URL + 'gondola/create', {apiaryId})
      .then((response) => {
        return response.data;
      });
  };

const deleteGondola = (id) => {
  console.log('GOND ID :: ', id);
  return axios
  .delete(API_URL + `gondola/delete/${id}`)
  .then((response) => {
    return response.data;
  });
}


  const GondolaService = {
    getGondolas,
    addGondola,
    deleteGondola,
  };
  export default GondolaService;