import React from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";

import { MusicNoteIcon, HeartIcon, ChatIcon, ShareArrowIcon, TickIcon } from "./Icon";
import { useRef , useEffect, useState} from "react";

const Video = (props) => {
  const videoRef = useRef()

  const [inView, setInview] = useState(false)
  const [playing,setPlaying] = useState(false)
  const callBack = (entries) => {
    const [entry] = entries
    setInview(entry.isIntersecting)
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callBack, {})
    
    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [videoRef.current])

  useEffect(() => {
    if (inView) {
      if (!playing) {
        videoRef.current.play()
        setPlaying(true)
      }
    } else {
      if (playing) {
        videoRef.current.pause()
        setPlaying(false)
      }
    }
  }, [inView, playing])
  return (
    <div className="w-[692px] max-w-[692px] mx-4 pb-6 border-b border-b-[#e7e7e9]">
      {/* header */}
     
            
                <div className="flex py-5">
        <div className="flex-1 flex ">
            <div className="mr-3">
            <Link className="w-14 h-14 block">
              <img
                src={props.data.user.avatar}
                alt=""
                className="w-full h-full rounded-full object-cover"
              />
            </Link>

            </div>
            <div>
          <Link className="flex items-center">
            
            <div className="">
              <h4 className=" font-bold text-lg hover:underline mr-1">
                {`${props.data.user.first_name} ${props.data.user.last_name}`}
              </h4>
              {!!props.data.user.tick && <TickIcon className=" w-4 h-4 ml-1" />}
            </div>
            <span className="text-sm font-normal leading-7">
              {props.data.user.nickname}
            </span>

          </Link>

          <div>
            <p className="inline-block mr-1">{props.data.description}</p>
            <p className="inline-block font-bold hover:underline">#xuhuong #hot #foryou</p>
          </div>
          <Link className="flex items-center">
            {
                props.data.music && (
                    <MusicNoteIcon />
                )
            }
            <span className="ml-1 font-bold hover:underline">{props.data.music}</span>
          </Link>
            </div>
        </div>
        <div>
            <button className="text-[#fe2c55] min-w-[88px] min-h-[28px] border border-[#fe2c55] font-semibold px-[10px] rounded select-none hover:bg-[#fe2c550f]">follow</button>
        </div>
      </div>
      {/* end header */}

      <div className="flex pl-[70px] ">
        <div>
            <div >
                <video 
                className="w-[286px] rounded-lg"
                controls
                loop
                muted
                playsInline
                ref={videoRef}

                >
                <source src={props.data.file_url} type="video/mp4" />
                  
                </video>
            </div>
        </div>
        <div className="flex flex-col self-end ml-5">
            <button className="flex justify-center items-center flex-col">
                    <span className="w-12 h-12 rounded-full text-[#161823] flex items-center bg-[#1618230f] justify-center">
                <HeartIcon className= "w-6 h-6"/>
                </span>
                <span className="mt-1  mb-2 font-bold text-xs text-[#161823bf]">{props.data.likes_count}</span>
            </button>
            <button className="flex justify-center items-center flex-col">
                <span className="w-12 h-12 rounded-full text-[#161823] flex items-center bg-[#1618230f] justify-center">
                <ChatIcon className= "w-6 h-6"/>
                </span>
                <span className="mt-1  mb-2 font-bold text-xs text-[#161823bf]">{props.data.comments_count}</span>
            </button>
            <button className="flex justify-center items-center flex-col">
                <span className="w-12 h-12 rounded-full text-[#161823] flex items-center bg-[#1618230f] justify-center">
                <ShareArrowIcon className= "w-6 h-6"/>
                </span>
                <span className="mt-1  mb-2 font-bold text-xs text-[#161823bf]">{props.data.shares_count}</span>
            </button>
        </div>
      </div>
            </div>
     
      
    
  );
};

Video.propTypes = {};

export default Video;
