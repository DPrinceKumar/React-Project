// import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie'

function Home() {

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetchPopular();
  }, []);


  const fetchPopular = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=a7aec237121ee4a63d0b26fa48a23c36&language=en-US&page=10");
    const movies = await data.json();
    // const arrMovie = new Array (movies);
    setPopular(movies.results);

    console.log(movies.results);

  };
  return (
    <>
    <div className="App">
      <div className="popular-movies">
        {popular.map((movies,index) => {
          return (
            <>
              <Movie key={Math.random()} movie={movies}/>
              
            </>
          )
        })}
      </div>
    </div>
    </>
  );
}

export default Home;
