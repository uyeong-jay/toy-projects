import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({id, year, title, summary, poster, genres}) {
  return (
    <Link to={
      {
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres
        }
      }
    }>
      <div className="movie">
        <div className="movie_data">
          <h1 className="movie_title">{title}</h1>
          <h3 className="movie_year">{year}</h3>
          <ul className="movie_genres">{genres && genres.map((genre, index) => (
            <li className="genres_genre" key={index}>{genre}</li>
          ))}
          </ul>
          <img src={poster} title={title} alt={title} />
          <p className="movie_summary">
            {summary.slice(0,100)}...
          </p>
        </div>
      </div>
    </Link>

  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;