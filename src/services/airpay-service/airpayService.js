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

const getAirpays = () => {
    return axios
      .get(API_URL + 'apiary')
      .then((response) => {
        return response.data;
      });
  };

  const addAirpay = (name, locationName, noColonies, fence, electricity) => {
    return axios
      .post(API_URL + 'apiary/create',
      {
        name,
        locationName,
        noColonies,
        fence,
        electricity
      })
      .then((response) => {
        return response.data;
      });
  };

  const deleteAirpay = (id) => {
    console.log('STIGNA VO DELETE :: ', id);
    return axios
      .delete(API_URL + `apiary/delete/${id}`)
      .then((response) => {
        return response.data;
      });
  }

  const AirpayService = {
    getAirpays,
    addAirpay,
    deleteAirpay
  };
  export default AirpayService;