import {
  FETCH_SUPERHERO_REQUEST,
  FETCH_SUPERHERO_SUCCESS,
  FETCH_SUPERHERO_FAILURE,
} from "./superheroTypes";

import axios from "axios";

export const fetchSuperheroRequest = () => {
  return {
    type: FETCH_SUPERHERO_REQUEST,
  };
};

export const fetchSuperheroSuccess = (data) => {
  return {
    type: FETCH_SUPERHERO_SUCCESS,
    payload: data,
  };
};

export const fetchSuperheroFailure = (error) => {
  return {
    type: FETCH_SUPERHERO_FAILURE,
    payload: error,
  };
};

export const fetchSuperheroById = (id) => {
  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const URL = `https://superheroapi.com/api/2579380368828751/${id}`;

  console.log(id);
  return (dispatch) => {
    dispatch(fetchSuperheroRequest);
    axios
      .get(PROXY_URL + URL)
      .then((res) => {
        dispatch(fetchSuperheroSuccess(res.data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchSuperheroFailure(errMsg));
      });
  };
};

export const fetchNSuperHeroes = (n) => {
  return (dispatch) => {
    for (let i = 1; i <= n; i++) {
      dispatch(fetchSuperheroById(i));
    }
  };
};
