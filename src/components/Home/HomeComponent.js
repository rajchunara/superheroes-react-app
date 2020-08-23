import React, { useState } from 'react';
//react-redux
import { useSelector } from 'react-redux';
//react components
import SuperHeroContainer from '../SuperHeroesContainer/SuperHeroContainer';
import LandingComponent from '../LandingComponent/LandingComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import SearchBar from '../SearchBar/SearchBar';
import IndividualHero from '../IndividualHero/IndividualHero';

export default function HomeComponent() {
  const isDataLoading = useSelector((state) => state.superhero.loading);
  const [showAllHeores, setShowAllHeores] = useState(true);

  const toggleHeoresView = (showView) => {
    setShowAllHeores(showView);
  };

  return (
    <div>
      <LandingComponent />
      <SearchBar toggleHeoresView={toggleHeoresView} />
      {showAllHeores ? <SuperHeroContainer /> : <IndividualHero />}

      {isDataLoading && <LoadingComponent />}
    </div>
  );
}
