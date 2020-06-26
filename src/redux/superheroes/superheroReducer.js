import {
  FETCH_SUPERHERO_REQUEST,
  FETCH_SUPERHERO_SUCCESS,
  FETCH_SUPERHERO_FAILURE,
} from "./superheroTypes";

const initialState = {
  loading: false,
  superHero: [],
  error: "",
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
        error: "",
      };
    }
    case FETCH_SUPERHERO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
