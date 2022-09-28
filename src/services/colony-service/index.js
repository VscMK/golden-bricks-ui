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
    .get(API_URL + 'colony')
    .then((response) => {
      return response.data;
    });
};

const addColony = (apiaryId, gondolaId,noBoxes,
  queen,
  queenAlarm) => {
    return axios
      .post(API_URL + 'colony/create', {apiaryId, gondolaId,noBoxes,
        queen,
        queenAlarm})
      .then((response) => {
        return response.data;
      });
  };
  const updateColony = (id,noBoxes,
    queen,
    queenAlarm) => {
    return axios
    .put(API_URL + `colony/update/${id}`,
    {noBoxes,
      queen,
      queenAlarm})
    .then((response) => {
      return response.data;
    });
  };

const deleteColony = (id) => {
  return axios
  .delete(API_URL + `colony/delete/${id}`)
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