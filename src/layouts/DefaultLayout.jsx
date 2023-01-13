import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const DefaultLayout = props => {
    return (
        <div>
            <Header/>
            <div>
                <Sidebar/>
                {props.children}
            </div>
        </div>
    );
};

DefaultLayout.propTypes = {
    
};

export default DefaultLayout;