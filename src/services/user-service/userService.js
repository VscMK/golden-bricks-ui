import axios from "axios";
import authHeader from "../auth-header/authHeader";

const API_URL = 'http://localhost:8081/'

const getAllUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
}

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getAdminObserverBoard = () => {
  return axios.get(API_URL + "admin-observer", { headers: authHeader() });
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

const UserService = {
  getBeekeeperBoard,
  getUserBoard,
  getAdminObserverBoard,
  getAdminBoard,
  getBeekeepersCoordinatorBoard,
  getAllUsers,
};
export default UserService;