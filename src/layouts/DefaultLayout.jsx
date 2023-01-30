import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const DefaultLayout = props => {
    return (
        <div>
            <Header/>
            <div className='max-w-full w-[1150px] mx-auto flex mt-[60px] gap-20'>
                <Sidebar/>
                <div className='flex-1'>
                {props.children}

                </div>
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    
};

export default DefaultLayout;