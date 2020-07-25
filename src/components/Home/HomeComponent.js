import React from 'react';
//react-redux
import { useSelector } from 'react-redux';
//react components
import SuperHeroContainer from '../SuperHeroesContainer/SuperHeroContainer';
import LandingComponent from '../LandingComponent/LandingComponent';
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import SearchBar from '../SearchBar/SearchBar';

export default function HomeComponent() {
  const isDataLoading = useSelector((state) => state.superhero.loading);

  return (
    <div>
      <LandingComponent />
      <SearchBar />
      <SuperHeroContainer />

      {!isDataLoading && <LoadingComponent />}
    </div>
  );
}
