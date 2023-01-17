import React, { useState } from "react";
import PropTypes from "prop-types";
import Tippy from "@tippyjs/react/headless";
import Wrapper from "./Wrapper";
import MenuItem from "./MenuItem";
import { ArrowLeft } from "./Icon";
const Menu = (props) => {
  const [history, setHistory] = useState([{ data: props.items }]);

  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            }
          }}
        />
      );
    });
  };
  return (
    <Tippy
      interactive
      delay={[0, 600]}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
      placement="bottom-end"
      render={(attr) => (
        <div tabIndex={-1} {...attr} className="w-[224px]">
          <Wrapper>
            {history.length > 1 && (
              <div className="flex items-center relative">
                <button
                  className="p-3"
                  onClick={() => {
                    setHistory((prev) => prev.slice(0, prev.length - 1));
                  }}
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h4 className="absolute translate-x-1/2 right-1/2 font-semibold">
                  language
                </h4>
              </div>
            )}

            {renderItems()}
          </Wrapper>
        </div>
      )}
    >
      {props.children}
    </Tippy>
  );
};

Menu.propTypes = {};

export default Menu;
