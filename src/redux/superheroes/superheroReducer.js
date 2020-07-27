import {
  FETCH_SUPERHERO_REQUEST,
  FETCH_SUPERHERO_SUCCESS,
  FETCH_SUPERHERO_FAILURE,
  SET_EXPECTED_SUPERHEROS,
  ADD_N_SUPERHEROES,
  ADD_SINGLE_SUPERHERO,
} from './superheroTypes';

//Use it when work on local machine
// import { fakedata } from "../../Utils/fakedata";

const initialState = {
  loading: false,
  expectedHeroes: 0,
  // superHero: [...fakedata],
  superHero: [],
  superHeroByName: {},
  error: '',
};

export const superheroReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUPERHERO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUPERHERO_SUCCESS: {
      return {
        ...state,
        loading: false,
        superHero: [...state.superHero, action.payload],
        error: '',
      };
    }

    case FETCH_SUPERHERO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SET_EXPECTED_SUPERHEROS:
      return {
        ...state,
        expectedHeroes: state.expectedHeroes + action.payload,
      };

    case ADD_N_SUPERHEROES:
      return {
        ...state,
        loading: false,
        superHero: [...state.superHero, ...action.payload],
        error: '',
      };

    case ADD_SINGLE_SUPERHERO:
      return {
        ...state,
        loading: false,
        superHeroByName: action.payload,
        error: '',
      };
    default:
      return state;
  }
};
