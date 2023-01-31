import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import Video from "../components/Video";
import * as videoServices from "../services/videoServices";

const INIT_PAGE = 1;
const Home = (props) => {
  const [page, setPage] = useState(INIT_PAGE);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await videoServices.getVideos({ type: "for-you", page });
      setVideos((prev) => [...prev, ...result]);
    };
    fetchApi();
  }, [page]);

  useEffect(() => {
    const time = setTimeout(() => {
      if (page <= 3) setPage((prev) => prev + 1);
    }, 6000);
    return () => clearTimeout(time);
  }, [page]);

  return (
    <div className="pt-5 ml-[27rem]">
      {videos.map((video, index) => (
        <Video key={index} data={video} />
      ))}
    </div>
  );
};

Home.propTypes = {};

export default Home;
