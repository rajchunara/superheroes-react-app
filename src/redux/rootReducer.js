import { combineReducers } from "redux";
import { superheroReducer } from "./superheroes/superheroReducer";

const rootReducer = combineReducers({
  superhero: superheroReducer,
});

export default rootReducer;
