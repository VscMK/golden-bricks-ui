import axios from 'axios';
import authHeader from '../auth-header/authHeader';

const API_URL = 'http://localhost:8081/';

const getAirpays = (name, locationName, noColonies, fence, electricity) => {
    return axios
      .get(API_URL + 'apiary', { headers: authHeader() },
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

  const addAirpay = (name, locationName, noColonies, fence, electricity) => {
    return axios
      .post(API_URL + 'apiary/create', {
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

  const AirpayService = {
    getAirpays,
    addAirpay,
  };
  export default AirpayService;