import axios, { AxiosInstance } from "axios";
class TMDbService {
  http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: "https://api.themoviedb.org/3",
      params: {
        api_key: "ffdbfa9ce05deef0d206e71990e6c4d0",
      },
    });
  }
  getTrendingMovies(timeWindow = "day") {
    return this.http.get(`/trending/movie/${timeWindow}`);
  }
  getPopularMovies() {
    return this.http.get(`/movie/popular`);
  }
  getTopRate() {
    return this.http.get(`/movie/top_rated`);
  }
  getAiringToday() {
    return this.http.get(`/tv/airing_today`);
  }

  getUpcoming() {
    return this.http.get(`/movie/upcoming`);
  }

  getNowPlaying() {
    return this.http.get(`/movie/now_playing`);
  }

  getMoviesByGenre(genreId: number, params?: {}) {
    return this.http.get(`/discover/movie`, {
      params: {
        with_genres: genreId,
        ...params,
      },
    });
  }

  getGenres() {
    return this.http.get(`/genre/movie/list`);
  }

  getDetailMovie(movieId: string) {
    return this.http.get(`/movie/${movieId}`);
  }

  getSimilarMovies(movieId: string) {
    return this.http.get(`/movie/${movieId}/similar`);
  }
}

export default TMDbService;
