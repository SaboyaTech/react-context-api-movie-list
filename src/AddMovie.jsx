import { useState, useContext } from 'react'
import { MovieContext } from './MovieListContext'

const AddMovie = () => {
  const [movies, setMovies] = useContext(MovieContext)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  
  const addMovie = () => {
    const id = movies.length ? movies[ movies.length - 1 ].id + 1 : 1
    const newMovie = { id, title, price }
    setMovies(preMovies => [...preMovies, newMovie])
  }

  const handleSubmit = e => {
    e.preventDefault()
    addMovie()
    setTitle('')
    setPrice('')
  }

  return (  
    <form onSubmit={handleSubmit}>
      <label htmlFor="movie-title">Movie Title:</label>
      <input
        type="text"
        name="movie-title"
        id="movie-title"
        value={ title }
        onChange={e => setTitle(e.target.value)}
      />
      <label htmlFor="movie-price">Movie Price:</label>
      <input
        type="text"
        name="movie-price"
        id="movie-price"
        placeholder='$'
        value={ price }
        onChange={e => setPrice(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}

export default AddMovie