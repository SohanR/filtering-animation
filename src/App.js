import './App.css';


function App() {


  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4d924c861f0ad983bad92ce12a9610ff&language=en-US&page=1')

    const movies = awat data.json();


  }

  console.log("hello");

  return (
    <div className="App">
      <h1>{process.env.NAME}</h1>
    </div>
  );
}

export default App;
