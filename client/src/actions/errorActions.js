import { GET_ERRORS } from './actionTypes';

export const getErrors = errors => {
  return {
    type: GET_ERRORS,
    payload: errors
  }
}