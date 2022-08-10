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

const getColonies = () => {
    return axios
    .get(API_URL + 'colonies')
    .then((response) => {
      return response.data;
    });
};

const addColony = (apiary_id, gondola_id,no_boxes,
  queen_id,
  queen_alarm) => {
    return axios
      .post(API_URL + 'colonies/create', {apiary_id, gondola_id,no_boxes,
        queen_id,
        queen_alarm})
      .then((response) => {
        return response.data;
      });
  };
  const updateColony = (id,no_boxes,
    queen_id,
    queen_alarm) => {
    return axios
    .put(API_URL + `colonies/update/${id}`,
    {no_boxes,
      queen_id,
      queen_alarm})
    .then((response) => {
      return response.data;
    });
  };

const deleteColony = (id) => {
  return axios
  .delete(API_URL + `colonies/delete/${id}`)
  .then((response) => {
    return response.data;
  });
}


  const ColonyService = {
    getColonies,
    addColony,
    updateColony,
    deleteColony,
  };
  export default ColonyService;