import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';
import Filter from './Filter';
import Movie from './Movie';


function App() {

  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);



  useEffect(() =>{
    fetchPopular()
  },[])


  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4d924c861f0ad983bad92ce12a9610ff&language=en-US&page=1')

    const movies = await data.json();

    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);

  }

  console.log("hello");

  return (
    <div className="App">
      <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
     <motion.div layout animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} className='popular-movies' >
       
       <AnimatePresence>
       {
         filtered.map((movie) =>{
           return <Movie key={movie.id} movie={movie} />
         })
       }
       </AnimatePresence>
     </motion.div>
    </div>
  );
}

export default App;
