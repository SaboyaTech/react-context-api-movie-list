import { useState, createContext } from 'react';

export const MovieContext = createContext()

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Harry Potter',
      price: '10'
    },
    {
      id: 2,
      title: 'Game of Thrones',
      price: '10'
    },
    {
      id: 3,
      title: 'Inception',
      price: '10'
    }
  ])
  
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}