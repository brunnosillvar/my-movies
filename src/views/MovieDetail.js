import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { MoviesService } from '../api/MoviesService';

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  const fetchMovie = useCallback(async () => {
    const { data } = await MoviesService.getMovieById(id);
    setMovie(data);
  }, [id]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <>
      <h1>{movie.title}</h1>
      <article>{movie.overview}</article>
    </>
  );
};
