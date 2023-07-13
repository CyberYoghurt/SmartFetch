import results from '../mock/sample.json';
import noResults from '../mock/noResultsResponse.json';

export default function Movies({ movies }) {
  console.log(movies);
  const renderedMovies = movies.map((movie) => {
    return (
      <li className="movie" key={movie.id}>
        <h3 className='movie__title'>{movie.title}</h3>
        <img src={movie.image} alt={movie.title + 'poster'} />
      </li>
    );
  });

  return <ul className="movies">{renderedMovies}</ul>;
}
