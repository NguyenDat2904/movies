import Breadcrumbs from "@/component/breadcrumbs";
import DetailPage from "@/component/detail/detail-page";
import getRandomFilms from "@/helper/random-film";
import FilmService from "@/service/api/film";
import React, { Fragment } from "react";

async function Detail({ params: { slug } }: { params: { slug: string } }) {
  const filmService = new FilmService();
  const detailFilm = await filmService.getDetailFilm(slug);
  const data = detailFilm.data.movie;
  const endPoint = detailFilm.data.movie.country;

  const getNation = await Promise.all(
    endPoint.map((item: any) =>
      filmService.getNationSlug(item?.slug as string, { params: { page: 1 } })
    )
  );
  const similarMovie = getNation
    .map((response) => response.data.data.items)
    .flat();

  return (
    <Fragment>
      <Breadcrumbs
        data={[
          { label: "Detail", value: "detail" },
          { label: data?.origin_name, value: data?.slug },
        ]}
      />
      <DetailPage
        data={data}
        similarMovie={getRandomFilms(similarMovie as [], 5)}
      />
    </Fragment>
  );
}

export default Detail;
