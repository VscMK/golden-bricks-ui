import axios from "axios";

const API_URL = 'http://localhost:8081/users/';

const register = (firstName, lastName, email, password, role_id, team_id) => {
  return axios.post(API_URL + 'register', {
    firstName,
    lastName,
    email,
    password,
    role_id,
    team_id
  });
};
const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
const logout = () => {
  localStorage.removeItem("user");
};
const AuthService = {
  register,
  login,
  logout,
};
export default AuthService;