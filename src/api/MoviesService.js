import axios from 'axios';

const API_KEY = '917632eecb6d1f750518b7350ac5f281';
const BASE_URL = 'https://api.themoviedb.org/3/';
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseUrl('movie/popular'));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}
