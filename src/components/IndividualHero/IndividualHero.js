import React from 'react';
import { useSelector } from 'react-redux';
import SuperheroItem from '../superheroItem/SuperheroItem';

import GridContainer from '../GridContainer/GridContainer';

import './individualHero.css';

export default function IndividualHero() {
  const { superHeroByName } = useSelector((state) => state.superhero);

  const afterSearchResults = () => {
    if (superHeroByName.response === 'error') {
      return <div> Superhero not found </div>;
    } else if (superHeroByName.response === 'success') {
      return (
        <GridContainer>
          {superHeroByName.results.map((hero) => {
            return <SuperheroItem superhero={hero} key={hero.id} />;
          })}
        </GridContainer>
      );
    }
  };

  const displayResult =
    Object.keys(superHeroByName).length === 0 ? (
      <div> Searching your hero </div>
    ) : (
      afterSearchResults()
    );

  return <div>
    <div className="individual-container">{displayResult}</div>
    <div className="bottomGap"></div>
    
    </div>;
}
