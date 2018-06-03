import axios from "axios";
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER } from "./actionTypes";
import { getErrors } from "./errorActions";
import setAuthToken from '../utils/setAuthToken';

export const registerUserRequest = (userData, history) => {
  return dispatch => {
    return axios
      .post("/api/register", userData)
      .then(res => history.push("/login"))
      .catch(err => dispatch(getErrors(err.response.data)));
  };
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const loginUserRequest = userData => {
  return dispatch => {
    return axios
      .post("/api/login", userData)
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        console.log(decoded);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => dispatch(getErrors(err.response.data)));
  };
};
