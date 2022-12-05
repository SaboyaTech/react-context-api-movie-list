import { useContext } from 'react'
import { MovieContext } from './MovieListContext'

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext)

  return (
    <nav>
      <h3>SaboyaDev</h3>
      <p># of Movies: {movies.length}</p>
    </nav>
  )
}
export default Nav