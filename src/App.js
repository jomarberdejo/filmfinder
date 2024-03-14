
import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';


const MovieItem = (props) => {
  console.log(props)
  return (
    <article key={props.movieItem.imdbID}>
      <img src= {props.movieItem.Poster !== "N/A" ? props.movieItem.Poster : 'https://via.placeholder.com/600/771796'} alt= {props.movieItem.Title} width={150} height={150} />
      <h2>{props.movieItem.Title}</h2>
      <p>{props?.movieItem.Type[0].toUpperCase() + props.movieItem.Type.slice(1)}</p>
      <span>{props.movieItem.Year}</span>
    </article>
  )
}




function App() {
  const [movies, setMovies] = useState([])
  const [searchVal, setSearchVal] = useState()

  const fetchMovies = async() => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchVal ? searchVal : 'Pokemon'}&apikey=4b33c568`);
      const data = await response.json();
      setMovies(data.Search)
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };


    useEffect(()=> {
     fetchMovies()
  },[])

  return (
    <div className="App">
     
      <Header searchValue ={searchVal} setSearchValue={setSearchVal} fetchMovies = {fetchMovies}/>
      
      <main>
      {
       movies?.length > 0 ?  movies?.map(movie=>  (
        <MovieItem movieItem = {movie}/> 
      )) : (
        <h1> No Movies Found</h1>
      )
      }
      </main>

      <Footer/>
    
    </div>
  );
}


export default App;