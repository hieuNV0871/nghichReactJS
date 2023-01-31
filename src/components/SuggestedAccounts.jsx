import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

import { TickIcon } from "./Icon";
import Wrapper from "./Wrapper";

const SuggestedAccounts = (props) => {
  return (
    <div className="relative py-4 before:content-[''] before:right-2 before:left-2 before:h-[1px] before:absolute before:bg-[#1618231f] before:top-0">
      <h2 className="mb-2 px-2 text-sm text-[#161823bf] font-semibold">
        {props.title}
      </h2>
      {props.data.map((suggestedAccount, index) => {
        return <AccountItem key={index} data={suggestedAccount} />;
      })}

      <p
        className="px-2 cursor-pointer text-[#fe2c55] text-sm font-semibold mt-2"
        onClick={props.onSeeAll}
      >
        {props.label}
      </p>
    </div>
  );
};

SuggestedAccounts.propTypes = {};

export default SuggestedAccounts;

const AccountItem = (props2) => {
  const renderPreview = () => {
    return (
      <div className="p-5">
        <div className="flex mb-3 justify-between items-center">
          <Link to={`/@${props2.data.nickname}`}>
            <img
              src={props2.data.avatar}
              alt=""
              className="w-[44px] h-[44px] rounded-full object-cover"
            />
          </Link>
          <button className="bg-[#fe2c55] min-w-[106px] min-h-[28px] font-semibold text-white rounded py-[6px] px-2 flex justify-center items-center hover:bg-[#ef2950]">
            Follow
          </button>
        </div>
        <Link to={`/@${props2.data.nickname}`} className="flex flex-col">
          <div className="flex items-center">
            <h4 className="text-[#161823] text-lg leading-[22px] font-bold">
              {`${props2.data.first_name} ${props2.data.last_name}`}
            </h4>
            {!!props2.data.tick && <TickIcon className=" w-4 h-4 ml-1" />}
          </div>
          <span className="text-sm font-semibold text-[#161823]">
            {props2.data.nickname}
          </span>
        </Link>
        <div className="flex gap-x-3 items-center mt-2">
          <h4 className="text-[17px]  font-bold">
            {props2.data.followers_count}
            <span className="ml-[6px] font-normal text-[#161823bf]">
              Followers
            </span>
          </h4>
          <h4 className="text-[17px]  font-bold">
            {props2.data.likes_count}
            <span className="ml-[6px] font-normal text-[#161823bf]">Likes</span>
          </h4>
        </div>
      </div>
    );
  };
  return (
    <Tippy
      interactive
      delay={[800, 0]}
      placement="bottom"
      render={(attr) => (
        // props2.data.is_followed &&
        <div tabIndex={-1} {...attr} className="w-[320px] rounded-lg">
          <Wrapper>{renderPreview()}</Wrapper>
        </div>
      )}
    >
      <Link
        to={`/@${props2.data.nickname}`}
        className="flex items-center py-[4px] px-4 cursor-pointer hover:bg-[#16182308]"
      >
        <img
          src={props2.data.avatar}
          alt=""
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex-1 ml-4 h-8 ">
          <h4 className="flex leading-5">
            <span className="text-[#161823] font-bold mt-[-2px] ">{`${props2.data.first_name} ${props2.data.last_name}`}</span>
            {!!props2.data.tick && (
              <TickIcon className="w-[14px] h-[14px] ml-[4px]" />
            )}
          </h4>
          <h3 className="text-sm text-[#161823bf] font-normal leading-[15px] mt-[-2px]">
            {props2.data.nickname}
          </h3>
        </div>
      </Link>
    </Tippy>
  );
};
