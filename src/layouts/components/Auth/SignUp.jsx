import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';

import { QRCodeIcon, UserIcon } from '../../../components/Icon';
import Login from './Login';
import { ModalContext } from '../Header';

const buttons = [
    {
      href: '',
      icon: <QRCodeIcon className="w-5 h-5"/>,
      title: 'Use QR code',
    },
    {
      href: '/signUp/phone-or-email',
      icon: <UserIcon className="w-5 h-5" />,
      title: 'Use phone / email / username',
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
const SignUp = props => {
  const value = useContext(ModalContext)
    const renderButtons = () => {
        return buttons.map((button, key) => {
          return button.href ? (
            <a href={button.href} key={key}
               onClick={(event) => {
                event.preventDefault()
                
              }}
            >
              <div className=" font-semibold text-sm border border-solid border-black/10 text-black/80 py-0 px-3 flex items-center justify-center h-11 relative cursor-pointer mb-4 break-keep space-nowrap bg-white">
                <div className="flex absolute text-lg left-3">{button.icon}</div>
                {button.title}
              </div>
            </a>
          ) : (
            <div>
              <div className=" font-semibold text-sm border border-solid border-black/10 text-black/80 py-0 px-3 flex items-center justify-center h-11 relative cursor-pointer mb-4 break-keep space-nowrap bg-white">
                <div className="flex absolute text-lg left-3 text-[#161823] font-semibold">{button.icon}</div>
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
              <h3 className="text-center text-4xl font-bold my-4 mx-auto">Sign up for TikTok</h3>
              {renderButtons()}
            </div>
          </div>
    
          <div className="w-full flex items-center justify-center bg-white py-4 px-7.5">
            <p className=" text-black/50 text-xs text-center w-[375px]">
              By continuing, you agree to TikTok's{' '}
              <a
                className="text-black/80 hover:underline"
                href="https://www.tiktok.com/legal/terms-of-service-row"
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>{' '}
              and confirm that you have read TikTok's{' '}
              <a
                className="text-black/80 hover:underline"
                href="https://www.tiktok.com/legal/page/row/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
    
          <div className=" flex items-center justify-center text-base h-16 border-t border-solid border-bg-black/40">
            <div>Already have an account?</div>
            <a
              className="hover:underline font-semibold ml-2 text-[#fe2c55]"
              href="/login"
              onClick={(event) => {
                event.preventDefault()
                value.handleModalChildren(<Login/>)
              }}
            >
              Login
            </a>
          </div>
        </>
      )
};

SignUp.propTypes = {
    
};

export default SignUp;