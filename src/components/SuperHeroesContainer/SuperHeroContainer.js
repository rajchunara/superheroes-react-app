import React from "react";
import { useSelector } from "react-redux";
import { NETWORK_ERROR, REQUEST_FAILED_ERROR } from "../../Utils/errorTypes";
import styles from "./superheroContainer.module.css";
import SuperheroItem from "../superheroItem/SuperheroItem";

function SuperHeroContainer() {
  const superHeroState = useSelector((state) => state.superhero);
  const superHeroError = superHeroState.error;
  const superheroes = superHeroState.superHero;

  //Returns jsx according to the error and no-error
  let superheroContainer = () => {
    if (superHeroError) {
      if (superHeroError === NETWORK_ERROR) {
        return <div className="networkError">Network Error</div>;
      } else if (superHeroError === REQUEST_FAILED_ERROR) {
        return <div className="networkError">404 Error</div>;
      }
    }
    //Return jsx if there is no error
    return (
      <div className={styles.gridContainer}>
        {superheroes.map((hero) => {
          return <SuperheroItem superhero={hero} />;
        })}
      </div>
    );
  };

  return (
    <div className={styles.superheroContainer}>{superheroContainer()}</div>
  );
}

export default SuperHeroContainer;
