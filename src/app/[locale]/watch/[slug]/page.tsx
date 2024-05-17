import React, { Fragment } from "react";
import Breadcrumbs from "@/component/breadcrumbs";
import Watching from "@/component/watching/watching";
import Episodes from "@/component/watching/episodes";
import Review from "@/component/detail/review";
import PostComment from "@/component/detail/post-comment";
import FilmService from "@/service/api/film";

async function Watch({ params: { slug } }: { params: { slug: string } }) {
  const filmService = new FilmService();
  const detailFilm = await filmService.getDetailFilm(slug);
  const data = detailFilm.data.movie;
  const episodes = detailFilm.data.episodes;
  return (
    <Fragment>
      <Breadcrumbs
        data={[
          { label: "Watching", value: "watching" },
          { label: data.origin_name, value: data.slug },
        ]}
      />
      <div className="pt-[60px] pb-[100px]">
        <div className="container">
          <div className="row">
            <div className="w-full mb-[35px]">
              <Watching data={data} episodes={episodes} />
              <Episodes data={data} episodes={episodes} />
            </div>
          </div>
          <div className="row">
            <div className="w-4/6">
              <Review />
              <PostComment />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Watch;
