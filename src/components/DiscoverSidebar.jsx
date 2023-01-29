import React from "react";
import PropTypes from "prop-types";
import { HashTagIcon, MusicNoteIcon } from "./Icon";
import Button from "./Button";
import config from "../configs";
const discoverItems = [
  {
    icon: <HashTagIcon />,
    title: "suthatla",
  },
  {
    icon: <HashTagIcon />,
    title: "mackedoi",
  },
  {
    icon: <HashTagIcon />,
    title: "sansangthaydoi",
  },
  {
    icon: <MusicNoteIcon />,
    title: "Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n & BHMedia",
  },
  {
    icon: <MusicNoteIcon />,
    title:
      "Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng",
  },
  {
    icon: <MusicNoteIcon />,
    title: "Thiên Thần Tình Yêu - RICKY STAR",
  },
  ,
  {
    icon: <HashTagIcon />,
    title: "7749hieuung",
  },
  {
    icon: <HashTagIcon />,
    title: "genzlife",
  },
  {
    icon: <MusicNoteIcon />,
    title: "Tình Đã Đầy Một Tim - Huyền Tâm Môn",
  },
  {
    icon: <MusicNoteIcon />,
    title:
      "Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham",
  },
  {
    icon: <MusicNoteIcon />,
    title: "Thiên Thần Tình Yêu - RICKY STAR",
  },
];
const DiscoverSidebar = (props) => {
  return (
    <div className="relative py-4 before:content-[''] before:right-2 before:left-2 before:h-[1px] before:absolute before:bg-[#1618231f] before:top-0">
      <h2 className="mb-2 px-2 text-sm text-[#161823bf] font-semibold ">
        Discover
      </h2>
      
      <div className="flex flex-wrap w-full px-2">
      {discoverItems.map((discoverItem, index) => (
        
          <Button key={index} to={config.routes.following} className="block w-fit max-w-full">
            <div className="hover:bg-[#16182308] flex w-fit max-w-full h-6 mb-3 py-[3px] px-[10px] border border-[#16182333] rounded-xl mr-2">
            <span>{discoverItem.icon}</span>
            
            <p className="leading-[16px] text-ellipsis overflow-hidden whitespace-nowrap pl-[6px] font-normal text-sm  text-[#161823bf]">
            {discoverItem.title}

            </p>

            </div>
          </Button>

      ))}
      </div>
      
    </div>
  );
};

DiscoverSidebar.propTypes = {};

export default DiscoverSidebar;
