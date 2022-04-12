import axios from 'axios';

const API_URL = 'http://localhost:8081/';

const getAirpays = (name, locationName, noColonies, fence, electricity) => {
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
    getAirpays
  };
  export default AirpayService;