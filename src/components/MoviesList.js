import { MovieItem } from './MovieItem';

export const MoviesList = ({ movies }) => {
  return (
    <section>
      <ul>
        {movies.map((item) => (
          <MovieItem movie={item} />
        ))}
      </ul>
    </section>
  );
};
