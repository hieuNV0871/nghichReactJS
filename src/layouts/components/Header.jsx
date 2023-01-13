import React from 'react';
import PropTypes from 'prop-types';
import image from '../../assets/images';
import Search from '../../components/Search';

const Header = props => {
    return (
        <div className='h-[60px] w-full border-b-2'>
            <div className='h-full max-w-[1150px] mx-auto pr-6 pl-5 flex items-center'>
                <div>
                    <img src={image.Logo} alt="TopTop" />
                </div>
                <Search/>
                <div className='flex '>
                    <button className='flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

                        upload
                    </button>
                    <button>
                        login
                    </button>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;