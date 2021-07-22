import React from 'react';
import { useState, useEffect } from 'react';
import Movies from './Movies';
import Search from './Search';

function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
    .then(res => {
     return res.json();
    })
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }, []);

  const img_api = "https://image.tmdb.org/t/p/w1280";


  const handleSubmit = (e) => {
    e.preventDefault();

    if(search){
    fetch("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=" + search)
    .then(res => {
     return res.json();
    })
    .then(data => {
      console.log(data);
      setMovies(data.results);
    })

    setSearch('')
  
  }
  }

  const handleChange = (e) => {
      setSearch(e.target.value);
    }






  return (
    <div className="App">
      <Search handleSubmit={handleSubmit} handleChange={handleChange} search={search} />
      {movies && <Movies  movies={movies} img_api={img_api}/>}
    </div>
  );
}

export default App;
