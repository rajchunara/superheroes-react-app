import React, { useEffect } from "react";

//react-redux
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
//react components
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/HomeComponent";
import { fetchNSuperHeroes } from "./redux/superheroes/superheroesAction";
//Animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
  }, []);

  //Fetch superheroes on mounting app
  useEffect(() => {
    dispatch(fetchNSuperHeroes(1, 12));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <HomeComponent />
    </div>
  );
}

// Use useSelectoe for functional component
const mapStateToProps = (state) => {
  return {
    superHero: state.superhero,
  };
};

//Use useDispatch for functional component
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNSuperHeroes: (n) => dispatch(fetchNSuperHeroes(n)),
//   };
// };

export default connect(mapStateToProps)(App);
