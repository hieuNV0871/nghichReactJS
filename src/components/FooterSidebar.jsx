import React from 'react';
import PropTypes from 'prop-types';

import config from '../configs';
import Button from './Button';
const footerLinks1 = [
    {
        to: config.routes.home,
        title: 'About'
    },
    {
        to: config.routes.home,
        title: 'Newsroom'
    },
    {
        to: config.routes.home,
        title: 'Contact'
    },
    {
        to: config.routes.home,
        title: 'Careers'
    },
    {
        to: config.routes.home,
        title: 'ByteDance'
    },
    
]

 const footerLinks2 = [
    {
        to: config.routes.home,
        title: 'TopTop for Good'
    },
    {
        to: config.routes.home,
        title: 'Advertise'
    },
    {
        to: config.routes.home,
        title: 'Developers'
    },
    {
        to: config.routes.home,
        title: 'Transperency'
    },
    {
        to: config.routes.home,
        title: 'TopTop Rewards'
    },
    {
        to: config.routes.home,
        title: 'TopTop Browse'
    },
    {
        to: config.routes.home,
        title: 'TopTop Embeds'
    },
 ]

 const footerLinks3 = [
    {
        to: config.routes.home,
        title: 'Help'
    },
    {
        to: config.routes.home,
        title: 'Safety'
    },
    {
        to: config.routes.home,
        title: 'Terms'
    },
    {
        to: config.routes.home,
        title: 'Privacy'
    },
    {
        to: config.routes.home,
        title: 'Creator Portal'
    },
    {
        to: config.routes.home,
        title: 'Community Guidelines'
    }
 ]

const FooterSidebar = props => {
    return (
        <div className="relative py-4 before:content-[''] before:right-2 before:left-2 before:h-[1px] before:absolute before:bg-[#1618231f] before:top-0">
            {/* <div className='px-2'>
                {
                    footerLinks.map((footerLink, index)=>(
                        <Button key={index} to={footerLink.to} className="hover:underline mt-[5px] mr-[6px] text-xs text-[#16182380] font-semibold inline-block">
                            {footerLink.title}
                        </Button>
                    ))
                }
            </div> */}
            <FooterLinkItem data = {footerLinks1}/>
            <FooterLinkItem data = {footerLinks2}/>
            <FooterLinkItem data = {footerLinks3}/>

            <span className='mt-[5px] px-2 text-xs text-[#16182380] font-semibold'>© 2023 TopTop</span>
        </div>
    );
};

FooterSidebar.propTypes = {
    
};

export default FooterSidebar;


const FooterLinkItem = (props) => {
    return (
        <div className='px-2 mb-2'>
            {
                props.data.map((d, index)=>(
                    <Button key={index} to={d.to} className="hover:underline mt-[5px] mr-[6px] text-xs text-[#16182380] font-semibold inline-block">
                        {d.title}
                    </Button>
                ))
            }
        </div>
    )
}