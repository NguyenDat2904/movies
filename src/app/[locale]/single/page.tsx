import Breadcrumbs from "@/component/breadcrumbs";
import PageLeft from "@/component/categories/page-left";
import SectionRight from "@/component/home/section-right";
import getRandomFilms from "@/helper/random-film";
import FilmService from "@/service/api/film";
import React, { Fragment } from "react";

async function Single({ params: { locale } }: { params: { locale: string } }) {
  const filmService = new FilmService();
  const singleFilm = await filmService.getFilmSingle({
    params: { page: 1 },
  });
  const data = singleFilm.data.data.items;
  const page = singleFilm.data.data.params.pagination.currentPage;

  const totalPage = singleFilm.data.data.params.pagination.totalItemsPerPage;
  const title = singleFilm.data.data.titlePage;

  const tvShow = await filmService.getFilmTVShow({ params: { page: 1 } });
  const tvShowData = tvShow.data.data.items;

  const cartoonMovie = await filmService.getFilmCartoon({
    params: { page: 1 },
  });
  const cartoonMovieData = cartoonMovie.data.data.items;
  return (
    <Fragment>
      <Breadcrumbs data={[{ label: "Single", value: "single" }]} />
      <div className="mt-[60px] mb-[100px]">
        <div className="container">
          <div className="row">
            <div className="px-[15px] w-4/6">
              <PageLeft
                locale={locale}
                data={data}
                title={title}
                page={page}
                totalPage={totalPage}
              />
            </div>
            <div className="px-[15px] w-2/6">
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

export default Single;
