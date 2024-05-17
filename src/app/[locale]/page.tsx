import Banner from "@/component/home/banner";
import Section from "@/component/home/section";
import SectionRight from "@/component/home/section-right";
import getRandomFilms from "@/helper/random-film";
import FilmService from "@/service/api/film";
import React, { Fragment } from "react";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  const filmDB = new FilmService();
  const newFilm = await filmDB.getNewFilm({ params: { page: 1 } });
  const newFilmData = newFilm.data.items;

  const singleMovie = await filmDB.getFilmSingle({ params: { page: 1 } });
  const singleFilm = singleMovie.data.data.items;

  const seriesMovie = await filmDB.getFilmSeries({ params: { page: 1 } });
  const seriesFilm = seriesMovie.data.data.items;

  const cartoonMovie = await filmDB.getFilmCartoon({ params: { page: 1 } });
  const cartoonMovieData = cartoonMovie.data.data.items;

  const tvShow = await filmDB.getFilmTVShow({ params: { page: 1 } });
  const tvShowData = tvShow.data.data.items;

  return (
    <Fragment>
      <Banner />
      <div className="pt-[80px] pb-[60px]">
        <div className="container">
          <div className="row">
            <div className="w-4/6 px-[1rem]">
              <Section
                data={getRandomFilms(newFilmData, 12)}
                title="NEW Movies"
                isButton
              />
              <Section
                data={getRandomFilms(singleFilm, 12)}
                title="Single Movies"
                isButton
              />
              <Section
                data={getRandomFilms(seriesFilm, 12)}
                title="Series Movies"
                isButton
              />
            </div>
            <div className="w-2/6 px-[1rem]">
              <SectionRight
                dataUp={getRandomFilms(tvShowData, 10)}
                data={getRandomFilms(cartoonMovieData, 6)}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
