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

const getQueen = () => {
    return axios
    .get(API_URL + 'queen')
    .then((response) => {
      return response.data;
    });
};

const addQueen = (apiary_id,gondola_id,colony_id,color_plate,
    number_on_plate,
    queen_number,
    clipped,
    mating_status,
    marked) => {
    return axios
      .post(API_URL + 'queen/create', {apiary_id,gondola_id,colony_id,color_plate,
        number_on_plate,
        queen_number,
        clipped,
        mating_status,
        marked})
      .then((response) => {
        return response.data;
      });
  };

  const updateQueen = (id,gondola_id,colony_id,color_plate,
    number_on_plate,
    queen_number,
    clipped,
    mating_status,
    marked) => {
    return axios
    .put(API_URL + `queen/update/${id}`,
    {gondola_id,colony_id,color_plate,
        number_on_plate,
        queen_number,
        clipped,
        mating_status,
        marked})
    .then((response) => {
      return response.data;
    });
  };

const deleteQueen = (id) => {
  return axios
  .delete(API_URL + `queen/delete/${id}`)
  .then((response) => {
    return response.data;
  });
}


  const QueenService = {
    getQueen,
    addQueen,
    updateQueen,
    deleteQueen,
  };
  export default QueenService;