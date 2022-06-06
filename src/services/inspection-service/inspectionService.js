import axios from "axios";
import authHeader from "../auth-header/authHeader";

const API_URL = "http://localhost:8081/";

axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = authHeader();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getInspections = () => {
  return axios.get(API_URL + "inspection").then((response) => {
    return response.data;
  });
};

const addInspection = (
  apiary_id,
  colony_id,
  number_of_boxes,
  number_occupied_combs,
  number_brood_combs,
  queen_status,
  queen_status_change_reason,
  swarming_tendency,
  varoa,
  natural_varoa,
  colony_loss,
  pollen,
  honey,
  hygiene,
  bees_gentleness,
  food,
  food_type,
  food_ammount,
  health_condition,
  attention_needed,
  attention_needed_time,
  total_weight,
  comment
) => {
  return axios
    .post(API_URL + "inspection/create", {
      apiary_id,
      colony_id,
      number_of_boxes,
      number_occupied_combs,
      number_brood_combs,
      queen_status,
      queen_status_change_reason,
      swarming_tendency,
      varoa,
      natural_varoa,
      colony_loss,
      pollen,
      honey,
      hygiene,
      bees_gentleness,
      food,
      food_type,
      food_ammount,
      health_condition,
      attention_needed,
      attention_needed_time,
      total_weight,
      comment,
    })
    .then((response) => {
      return response.data;
    });
};

const updateInspection = (
   id, number_of_boxes,number_occupied_combs,number_brood_combs,queen_status,queen_status_change_reason,swarming_tendency,
    varoa,natural_varoa,colony_loss,pollen,honey,hygiene,bees_gentleness,food,food_type,food_ammount,health_condition,attention_needed,attention_needed_time,
  total_weight,comment
) => {
  return axios
    .put(API_URL + `inspection/update/${id}`, {
       number_of_boxes,number_occupied_combs,number_brood_combs,queen_status,queen_status_change_reason,swarming_tendency,
        varoa,natural_varoa,colony_loss,pollen,honey,hygiene,bees_gentleness,food,food_type,food_ammount,health_condition,attention_needed,attention_needed_time,
      total_weight,comment
    })
    .then((response) => {
      return response.data;
    });
};

const deleteInspection = (id) => {
  return axios.delete(API_URL + `inspection/delete/${id}`).then((response) => {
    return response.data;
  });
};

const InspectionService = {
    getInspections,
    addInspection,
    deleteInspection,
    updateInspection,
};
export default InspectionService;
