import React from 'react';
import PropTypes from 'prop-types';

import MenuItemSidebar from '../../components/MenuItemSidebar';
import { CameraIcon, GroupUser, HomeIcon } from '../../components/Icon';
import config from '../../configs'
import SuggestedAccounts from '../../components/SuggestedAccounts';
import DiscoverSidebar from '../../components/DiscoverSidebar';
import FooterSidebar from '../../components/FooterSidebar';
const Sidebar = props => {
    return (
        <aside className='pl-4 pt-5 w-[356px]'>
            <div className='flex flex-col mb-2'>
                <MenuItemSidebar title="For You" to={config.routes.home} icon={<HomeIcon className="w-8 h-8"/>}/>
                <MenuItemSidebar title="Following" to={config.routes.following} icon={<GroupUser className="w-8 h-8"/>}/>
                <MenuItemSidebar  title="LIVE" to={config.routes.live} icon={<CameraIcon className="w-8 h-8"/>}/>
            </div>

            <SuggestedAccounts title="Suggested accounts" label ="See all"/>
            <SuggestedAccounts title="Following accounts" label = "See more"/>
            <DiscoverSidebar/>
            <FooterSidebar/>
        </aside>
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;