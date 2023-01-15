import React from "react";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import HeadlessTippy from "@tippyjs/react/headless";

import useDebounce from "../hooks/useDebounce";
import * as searchServices from "../services/searchServices";
import  Wrapper  from "./Wrapper";
import AccountItem from "./AccountItem";

const Search = (props) => {
  const inputRef = useRef();

  const [borderActive, setBorderActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)
  const debounceSearch = useDebounce(searchValue, 500)

  const handleChange = (e) => {
    const searchValue = e.target.value;
    !searchValue.startsWith(" ") ? setSearchValue(searchValue) : "";
  };

  useEffect(()=>{
    if(!debounceSearch){
      setSearchResult([])
      return
    }
    setLoading(true)
    const fetchApi = async () => {
      setLoading(true)
      const result = await searchServices.search(debounceSearch)
      setSearchResult(result)
      setLoading(false)
    }
    fetchApi()

  },[debounceSearch])
  const handleClear = () => {
    setSearchValue("");
    setSearchResult([])
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false)
  }
  return (
    <div>
      <HeadlessTippy
        onClickOutside={handleHideResult}
        interactive
        visible = {showResult && searchResult.length > 0}
        render={attrs=>(
          <div tabIndex={-1} {...attrs} className="w-[361px]">
            <Wrapper>
              <h4 className="py-[5px] px-3 font-semibold text-sm text-[#16182380]">Accounts</h4>
              {
                searchResult.map(result => (
                  <AccountItem key={result.id} data={result} />
                ))
              }

            </Wrapper>
          </div>
        )}
      >

      <div
        className={
          borderActive
            ? "border border-[#c5c6c9] h-[46px] flex items-center bg-[#1618230f] rounded-3xl relative"
            : "border border-transparent h-[46px] flex items-center bg-[#1618230f] rounded-3xl relative"
        }
      >
        <input
          ref={inputRef}
          onClick={() => setBorderActive(true)}
          onBlur={() => setBorderActive(false)}
          onFocus={()=> setShowResult(true)}
          onChange={handleChange}
          value={searchValue}
          className="w-[292px] h-[22px] caret-red-500 outline-none bg-transparent pl-4 pr-10"
          type="text"
          placeholder="Search accounts and videos"
        />
        <div className="mx-3 absolute right-[50px]">
          {
            loading && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-[360deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </div>

            )
          }
          {searchValue && !loading && (
            <div
              onClick={handleClear}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(22, 24, 35, .34)"
                class="w-4 h-4 cursor-pointer"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <span className="w-[1px] h-[28px] bg-[#1618231f]"></span>
        <button className="hover:bg-[#16182308] bg-transparent w-[50px] flex items-center justify-center h-full rounded-tr-3xl rounded-br-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={
              searchValue ? "rgba(22, 24, 35, .75)" : "rgba(22, 24, 35, .34)"
            }
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      </HeadlessTippy>
      
    </div>
  );
};

Search.propTypes = {};

export default Search;
