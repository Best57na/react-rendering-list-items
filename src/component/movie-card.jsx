import GenreCard from "./genre-card";

function MovieCard({ movies }) {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      {movies.map((item, index) => (
        <div
          className="flex items-start gap-5 w-[500px] max-w-[90vw] bg-white rounded-2xl shadow-lg p-6"
          key={index}
        >
          <span className="shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-[100px] h-[100px] object-cover rounded-xl"
            />
          </span>
          <div className="flex flex-col gap-2.5 text-left text-[15px] text-neutral-900 font-semibold">
            <div>Title: {item.title}</div>
            <div>Year: {item.year}</div>
            <div>Runtime: {item.runtime}</div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="whitespace-nowrap">Genres: </span>
              {item.genres.map((genre, index) => (
                <GenreCard key={index} genre={genre} />
              ))}
            </div>
            <div>IMDB Ratings: {item.imdbRating}</div>
            <div>IMDB Votes: {item.imdbVotes}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;
