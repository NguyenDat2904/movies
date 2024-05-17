import axios, { AxiosInstance } from "axios";

class FilmService {
  http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: "https://phimapi.com/",
    });
  }

  //   Get NEW FILM
  getNewFilm({ params }: { params?: {} }) {
    return this.http.get("/danh-sach/phim-moi-cap-nhat", {
      params: { ...params },
    });
  }

  // Film lẻ
  getFilmSingle({ params }: { params?: {} }) {
    return this.http.get("/v1/api/danh-sach/phim-le");
  }
  // Film bộ
  getFilmSeries({ params }: { params?: {} }) {
    return this.http.get("/v1/api/danh-sach/phim-bo");
  }
  //   Cartoon
  getFilmCartoon({ params }: { params?: {} }) {
    return this.http.get("/v1/api/danh-sach/hoat-hinh");
  }
  //   TV Show
  getFilmTVShow({ params }: { params?: {} }) {
    return this.http.get("/v1/api/danh-sach/tv-shows");
  }

  //   Detail Film
  getDetailFilm(slug: string) {
    return this.http.get(`/phim/${slug}`);
  }

  // getCateSlug
  getFilmSlug(slug: string, { params }: { params?: {} }) {
    return this.http.get(`/v1/api/the-loai/${slug}`);
  }

  // getNationSlug
  getNationSlug(slug: string, { params }: { params?: {} }) {
    return this.http.get(`/v1/api/quoc-gia/${slug}`);
  }
}
export default FilmService;
