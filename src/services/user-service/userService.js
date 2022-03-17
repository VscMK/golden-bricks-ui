import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdminObserverBoard = () => {
  return axios.get(API_URL + "admin-observator", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getBeekeeperBoard = () => {
    return axios.get(API_URL + 'beekeeper', { headers: authHeader() });
}
const getBeekeepersCoordinatorBoard = () => {
    return axios.get(API_URL + 'beekeepers-coordinator', {headers: authHeader()});
}

const userService = {
  getBeekeeperBoard,
  getUserBoard,
  getAdminObserverBoard,
  getAdminBoard,
};
export default userService;