function GenreCard({ genre }) {
  return (
    <span className="inline-block bg-red-300 text-neutral-900 font-semibold text-[13px] px-3.5 py-1 rounded-lg">
      {genre}
    </span>
  );
}

export default GenreCard;
