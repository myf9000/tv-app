import { REGISTER_USER } from "./actionTypes";
import { getErrors } from './errorActions';
import axios from "axios";

export const registerUser = userData => {
  return {
    type: REGISTER_USER,
    payload: userData
  };
};

export const registerUserRequest = (userData, history) => {
  return dispatch => {
    return axios
      .post("/api/register", userData)
      .then(res => history.push('/login'))
      .catch(err => dispatch(getErrors(err.response.data)));
  };
};
