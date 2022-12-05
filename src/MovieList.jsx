import { useContext } from 'react'
import { MovieContext } from './MovieListContext'
import Movie from './Movie'

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <div>
      {
        movies.map(movie => (
          <Movie
            key={movie.id}
            title={ movie.title }
            price={ movie.price }
          />
        ))
      }
    </div>
  )
}
export default MovieList