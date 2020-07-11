import React from 'react';
import './App.css';
import Header from './components/Header';
import Dados from './data'
import MovieCard from './components/MovieCard'
import MovieList from './components/MovieList'


function App() {
  return (
    <div className="App">
      <Header />;     
      <MovieList movies={Dados} />
    </div>
  );
}

export default App;
