"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

function Watching({ data, episodes }: { data: any; episodes: any }) {
  const [play, setPlay] = useState(false);

  const searchParams = useSearchParams();
  let slug = searchParams.get("slug");
  slug = slug || "tap-01";
  const episodeList = episodes.map((server: any) => server.server_data).flat();
  const currentEpisode = episodeList.find(
    (episode: any) => episode.slug === slug
  );
  const url = currentEpisode.link_embed;
  const thumbnailUrl = data.thumb_url;

  return (
    <div className="mb-[70px] relative rounded-[5px] overflow-hidden">
      <iframe
        className={play ? "" : "hidden"}
        src={play ? url : ""}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        width="100%"
        height="900"
      ></iframe>
      {!play && (
        <div className="position">
          <img
            className="cursor-pointer w-full h-[900] object-cover"
            src={thumbnailUrl}
            alt="Video thumbnail"
            onClick={() => setPlay(true)}
          />
        </div>
      )}
    </div>
  );
}

export default Watching;
