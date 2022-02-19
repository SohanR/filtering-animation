import { useEffect, useState } from 'react';
import './App.css';
import Movie from './Movie';


function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() =>{
    fetchPopular()
  },[])


  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4d924c861f0ad983bad92ce12a9610ff&language=en-US&page=1')

    const movies = await data.json();

    console.log(movies);
    setPopular(movies.results);

  }

  console.log("hello");

  return (
    <div className="App">
     <div className='popular-movies' >
       {
         popular.map((movie) =>{
           return <Movie key={movie.id} movie={movie} />
         })
       }
     </div>
    </div>
  );
}

export default App;
