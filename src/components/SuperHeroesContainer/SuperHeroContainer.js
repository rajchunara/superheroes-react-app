import React, { useRef, useEffect } from 'react';

// React-redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchNSuperHeroes } from '../../redux/superheroes/superheroesAction';

//react components
import SuperheroItem from '../superheroItem/SuperheroItem';
import NetworkError from '../ErrorComponents/NetworkError';
import NotFoundError from '../ErrorComponents/NotFoundError';
import GridContainer from '../GridContainer/GridContainer';

//Utils
import { totalNumberOfHeroes } from '../../Utils/numberOfHeroes';
import { findTheMaxIdFromSuperheroes } from '../../Utils/utilFunctions';
import { NETWORK_ERROR, REQUEST_FAILED_ERROR } from '../../Utils/errorTypes';

//css
import styles from './superheroContainer.module.css';

function SuperHeroContainer() {
  const superHeroState = useSelector((state) => state.superhero);
  const Error = superHeroState.error;
  const loadingData = superHeroState.loading;
  const dispatch = useDispatch();
  const superheroes = superHeroState.superHero;
  //To get info if user has reached bottom of the page
  const bottomRef = useRef();
  let ignoreFirstObserverCall = true;
  //Fetch 50 heroes every time
  let numberOfHeroesToFetch = 40;

  //This function is called when the node element is seen in view port
  //It receives array of element which is seen
  //but here we are watching only one element
  function callAPIWhenBottomofListIsReached(entries) {
    if (entries[0].isIntersecting && !ignoreFirstObserverCall) {
      //Call API Here
      if (!loadingData) {
        let idOfLastSuperHero = findTheMaxIdFromSuperheroes(superheroes);

        let heroesRemainingToFetch = totalNumberOfHeroes - idOfLastSuperHero;

        //Check how many heroes are left to fetch
        //Total heroes are 731, if fetched heroes are 700 then only 31 are remaining so fetch only 31
        //and avoid unnecessary fetching
        numberOfHeroesToFetch =
          heroesRemainingToFetch > numberOfHeroesToFetch
            ? numberOfHeroesToFetch
            : heroesRemainingToFetch;

        dispatch(
          fetchNSuperHeroes(idOfLastSuperHero + 1, numberOfHeroesToFetch)
        );
        // dispatch(fetchSuperheroById(100));
      }
    }
    ignoreFirstObserverCall = false;
  }

  //For intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      callAPIWhenBottomofListIsReached,
      {
        root: null,
        threshold: 1,
      }
    );
    observer.observe(bottomRef.current);
    return () => {
      observer.disconnect();
    };
  }, [superheroes, loadingData]);

  //Returns jsx according to the error and no-error
  let superheroContainer = () => {
    //Return error jsx if there is error
    if (Error) {
      if (Error === NETWORK_ERROR) {
        return <NetworkError />;
      } else if (Error === REQUEST_FAILED_ERROR) {
        return <NotFoundError />;
      }
    }

    //Return jsx if there is no error
    return (
      <GridContainer>
        {superheroes.map((hero) => {
          return <SuperheroItem superhero={hero} key={hero.id} />;
        })}

        {/* bottomRef to check if user has reached bottom of list using intersection observer */}
        <div className={styles.bottomRef} ref={bottomRef}></div>
        <div className={styles.bottomGap}></div>
      </GridContainer>
    );
  };

  //Return from this component
  return (
    <div className={styles.superheroContainer}>
      {superheroContainer()}
      <div className={styles.bottomGap}></div>
    </div>
  );
}

export default SuperHeroContainer;
