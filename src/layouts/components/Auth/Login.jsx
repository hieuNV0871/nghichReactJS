import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { QRCodeIcon, UserIcon } from '../../../components/Icon';
import { ModalContext } from '../Header';
import SignUp from './SignUp';
import { useState } from 'react';


const LoginWithUsername = () => {
  return (
    <div>
        login
    </div>
  )
}

const LoginWithQRCode = () => {
  return (
    <div>
      login
    </div>
  )

}


const buttons = [
    {
      href: '/login/qrcode',
      icon: <QRCodeIcon className="w-5 h-5"/>,
      title: 'Use QR code',
      children: <LoginWithQRCode/>
    },
    {
      href: '/login/phone-or-email',
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Use phone / email / username',
      children: <LoginWithUsername/>
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Continue with Facebook',
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Continue with Google',
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Continue with Line',
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Continue with Twitter',
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Continue with KakaoTalk',
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Continue with Apple',
    },
    {
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Continue with Instagram',
    },
  ]
  
  const Login = props => {
    const [isChildren, setIsChildren] = useState(false)
    const [children, setChildren] = useState()

  const value = useContext(ModalContext)
      const renderButtons = () => {
        return buttons.map((button, key) => {
          return button.href ? (
            <a
              href={button.href}
              key={key}
              onClick={(event) => {
                event.preventDefault()
                setIsChildren(true)
                setChildren(button.children)
                
              }}
            >
              <div className=" font-semibold text-sm border border-solid border-black/10 text-black/80 py-0 px-3 flex items-center justify-center h-11 relative cursor-pointer mb-4 break-keep space-nowrap bg-white">
                <div className="flex absolute text-xl left-3">{button.icon}</div>
                {button.title}
              </div>
            </a>
          ) : (
            <div>
              <div className=" font-semibold text-sm border border-solid border-black/10 text-black/80 py-0 px-3 flex items-center justify-center h-11 relative cursor-pointer mb-4 break-keep space-nowrap bg-white">
                <div className="flex absolute text-xl left-3 text-[#161823] font-semibold">{button.icon}</div>
                {button.title}
              </div>
            </div>
          )
        })
      }
    
    
      return (
        <>
          <div className="overflow-auto flex-1">
            <div className="m-auto w-4/5">
              <h3 className="text-center text-4xl font-bold my-4 mx-auto">Log in to TikTok</h3>
              {
              
              isChildren ? children : renderButtons()
              
              }
            </div>
          </div>
    
          <div
            className=" h-16 border-t border-solid flex justify-center items-center text-base leading-4"
            style={{
              color: 'rgb(22, 24, 35)',
              borderColor: 'rgba(22, 24, 35, 0.12)',
            }}
          >
            <div>Don't have an account?</div>
            <a
                className="hover:underline font-semibold ml-2 text-[#fe2c55]"
              href="/signup"
              onClick={(event) => {
                event.preventDefault()
                value.handleModalChildren(<SignUp/>)
              }}
            >
              Sign up
            </a>
          </div>
        </>
      )
};



Login.propTypes = {
    
};

export default Login;


