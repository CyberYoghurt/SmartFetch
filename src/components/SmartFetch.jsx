import { useEffect, useState, useRef, useCallback } from 'react';
import debounce from 'just-debounce-it';

import useMovies from '../hooks/useMovies.js';
import useSearch from '../hooks/useSearch.js';

import Movies from './Movies.jsx';

export default function UsefulTable() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };
  const handleSort = () => {
    setSort(!sort);
  };
  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div>
      <header>
        <h1>Search for movies API</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__field">
            <label for="search">Look for a movie:</label>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Transformers"
              onChange={handleChange}
              value={search}
            />
          </div>
          <div className="form__field">
            <label for="sort">Sort Movies</label>
            <input
              id="sort"
              type="checkbox"
              onChange={handleSort}
              value={sort}
            />
          </div>
          <button> Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <h2>Movies</h2>
        {loading && <p>Loading</p>}
        {movies && <Movies movies={movies}></Movies>}
      </main>
    </div>
  );
}
