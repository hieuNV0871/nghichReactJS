import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = props => {
    return (
        <div className='overflow-auto flex flex-col w-full pt-2 rounded-lg bg-white min-h-[100px] max-h-search shadow-2xl'>
            {props.children}
        </div>
    );
};

Wrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default Wrapper