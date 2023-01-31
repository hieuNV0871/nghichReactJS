import React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import MenuItemSidebar from "../../components/MenuItemSidebar";
import { CameraIcon, GroupUser, HomeIcon } from "../../components/Icon";
import config from "../../configs";
import SuggestedAccounts from "../../components/SuggestedAccounts";
import DiscoverSidebar from "../../components/DiscoverSidebar";
import FooterSidebar from "../../components/FooterSidebar";
import * as userServices from "../../services/userServices";

const INIT_PAGE = 1;
const PER_PAGE = 5;

const Sidebar = (props) => {
  const [perPage, setPerPage] = useState(PER_PAGE);

  const [suggestedAccounts, setSuggestedAccounts] = useState([]);

  // suggest users
  useEffect(() => {
    const fetchApi = async () => {
      const result = await userServices.SuggestedAccount({
        page: INIT_PAGE,
        perPage: perPage,
      });
      setSuggestedAccounts(result);
    };
    fetchApi();
  }, [perPage]);

  // following users

  const handleSeeAll = () => {
    if (suggestedAccounts.length === PER_PAGE) {
      setPerPage(PER_PAGE * 3);
    } else {
      setPerPage(PER_PAGE);
    }
  };

  return (
    <aside className="pl-4 pt-5 w-[356px] fixed z-10 bottom-0 top-16 bg-white  overflow-y-hidden hover:overflow-y-scroll">
      <div className="flex flex-col mb-2">
        <MenuItemSidebar
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon className="w-8 h-8" />}
        />
        <MenuItemSidebar
          title="Following"
          to={config.routes.following}
          icon={<GroupUser className="w-8 h-8" />}
        />
        <MenuItemSidebar
          title="LIVE"
          to={config.routes.live}
          icon={<CameraIcon className="w-8 h-8" />}
        />
      </div>

      <SuggestedAccounts
        title="Suggested accounts"
        label={suggestedAccounts.length === PER_PAGE ? "See all" : "See less"}
        data={suggestedAccounts}
        onSeeAll={handleSeeAll}
      />
      {/* <SuggestedAccounts title="Following accounts" label = "See more"  onSeeMore = {handleSeeMore}/> */}
      <DiscoverSidebar />
      <FooterSidebar />
    </aside>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
