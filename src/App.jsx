import movies from "./data/movies";
import MovieCard from "./component/movie-card";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center py-10">Movie List Section</h1>
      <section className="flex flex-col items-center min-h-screen bg-neutral-100 px-5">
        {/* Render Movie Lists Here */}
        <MovieCard movies={movies} />
      </section>
    </div>
  );
}

export default App;
