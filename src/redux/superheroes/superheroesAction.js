import {
  FETCH_SUPERHERO_REQUEST,
  FETCH_SUPERHERO_SUCCESS,
  FETCH_SUPERHERO_FAILURE,
  SET_EXPECTED_SUPERHEROS,
  ADD_N_SUPERHEROES,
} from "./superheroTypes";

import axios from "axios";
import { API_URL } from "../../config/fetchDataCred";

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

export const setExpectedSuperheroes = (totalHeroesExpected) => {
  return {
    type: SET_EXPECTED_SUPERHEROS,
    payload: totalHeroesExpected,
  };
};

export const addNSuperheroes = (heroesArray) => {
  return {
    type: ADD_N_SUPERHEROES,
    payload: heroesArray,
  };
};

export const fetchSuperheroById = (id) => {
  const URL = `${API_URL}/${id}`;

  return (dispatch) => {
    dispatch(fetchSuperheroRequest);
    axios
      .get(URL)
      .then((res) => {
        dispatch(fetchSuperheroSuccess(res.data));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchSuperheroFailure(errMsg));
      });
  };
};

export const fetchNSuperHeroes = (lastId, numberOfHeros) => {
  let heroesArray = [];

  return (dispatch) => {
    dispatch(setExpectedSuperheroes(numberOfHeros));
    dispatch(fetchSuperheroRequest);
    for (let i = lastId; i < lastId + numberOfHeros; i++) {
      let URL = `${API_URL}/${i}`;

      axios
        .get(URL)
        .then((res) => {
          heroesArray.push(res.data);

          //Dispatch action on last iteration
          if (i === lastId + numberOfHeros - 1) {
            dispatch(addNSuperheroes(heroesArray));
          }
        })
        .catch((err) => {
          const errMsg = err.message;
          dispatch(fetchSuperheroFailure(errMsg));
        });
    }
  };
};
