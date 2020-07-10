import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="movie-list">
        <MovieList />
      </section>
    </div>
  );
}

export default App;
