import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/Home/HomeComponent";
import { connect } from "react-redux";
import { fetchNSuperHeroes } from "./redux/superheroes/superheroesAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNSuperHeroes(20));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <HomeComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    superHero: state.superhero,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchNSuperHeroes: (n) => dispatch(fetchNSuperHeroes(n)),
//   };
// };

export default connect(mapStateToProps)(App);
