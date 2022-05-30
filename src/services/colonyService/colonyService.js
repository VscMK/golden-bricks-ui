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
)

const getColonies = () => {
    return axios
      .get(API_URL + 'colony')
      .then((response) => {
        return response.data;
      });
  };

  const addColony = (apiaryId, gondolaId, noBoxes, queenId, queenAlarm ) => {
    return axios
      .post(API_URL + 'colony/create',
      {
        apiaryId, gondolaId, noBoxes, queenId, queenAlarm
      })
      .then((response) => {
        return response.data;
      });
  };

//   const updateApiary = (id, name, locationName, noColonies, fence, electricity) => {
//     return axios
//     .put(API_URL + `apiary/update/${id}`,
//     {name, locationName, noColonies, fence, electricity})
//     .then((response) => {
//       return response.data;
//     });
//   };

//   const deleteAirpay = (id) => {
//     return axios
//       .delete(API_URL + `apiary/delete/${id}`)
//       .then((response) => {
//         return response.data;
//       });
//   }

  const ColonyService = {
    // getAirpays,
    addColony,
    getColonies,
    // deleteAirpay,
    // updateApiary,
  };
  export default ColonyService;