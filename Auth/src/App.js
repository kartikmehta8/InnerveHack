import React, { useState, useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner';
import './App.css';
import google from './Google.png';
import mail from './mail.jpg';
import dash from './dash.webp';

import useArcanaAuth from './useArcanaAuth';

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [account, setAccount] = useState('');

  const {
    initializeAuth,
    isLoggedIn,
    getAccounts,
    login,
    loginWithLink,
    logout,
    initialized,
  } = useArcanaAuth();

  const initialize = async () => {
    await initializeAuth();
  };

  const handleLogout = async () => {
    setLoggedIn(false);
    await logout();
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    const loadDetails = async () => {
      if (initialized) {
        const isLogged = await isLoggedIn();
        if (isLogged) {
          setLoggedIn(true);
          const acc = await getAccounts();
          setAccount(acc[0]);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    };
    loadDetails();
  }, [initialized]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <div className='flex justify-center my-4 pb-2 text-2xl mukta font-bold border-b border-black'>
        Mottainai
      </div>
      <div className='container center mt-24'>
        <div className='mt-12'>&nbsp;</div>
        <div className='flex justify-center bg-black py-4 px-6 mt-40 border border-b-0 border-black mukta text-lg font-bold text-white'>
          <img
            src='https://arcana.network/_nuxt/img/arcana-logo-vertical.fd8048a.svg'
            alt='A'
          />
        </div>
        <div className=''>
          {loading ? (
            <div className='loading'>
              <ColorRing
                visible={true}
                height='100'
                width='80'
                ariaLabel='blocks-loading'
                wrapperStyle={{}}
                wrapperClass='blocks-wrapper'
                colors={['#000000']}
              />
            </div>
          ) : !loading && loggedIn ? (
            <div className='border-2 border border-black'>
              <h3 className='mukta'>
                Welcome, <span className='font-bold text-sm'>{account}</span>
              </h3>
              <h3>You're logged in successfully.</h3>
              <div className='flex justify-center text-md py-2 py-4 hover:text-gray-700 border-black border mukta border-r-0 border-l-0 bo'>
                <a
                  href='http://localhost:3000'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to Dashboard &nbsp;
                </a>
                <img
                  src={dash}
                  alt='D'
                  style={{ height: '25px', width: '25px' }}
                />
              </div>
              <button
                className='big-button text-red-500'
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className='box'>
              <h2 className='sub-heading border-b border-black'>
                Select a login
              </h2>
              <div className='options'>
                <div
                  style={{ cursor: 'pointer' }}
                  className='flex justify-center my-4'
                  onClick={() => login('google')}
                >
                  <img
                    src={google}
                    alt='G'
                    style={{ height: '25px', width: '25px' }}
                  />{' '}
                  &nbsp; Google Login
                </div>
                {/* <button className="big-button" onClick={() => login("twitch")}>
                Twitch Login
              </button>
              <button className="big-button" onClick={() => login("discord")}>
                Discord Login
              </button>
              <button className="big-button" onClick={() => login("twitter")}>
                Twitter Login
              </button> */}
              </div>
              <div className='form'>
                <input
                  value={email}
                  type='text'
                  className='pl-4 border border-2 border-black mukta border-l-0 border-b-0'
                  placeholder='Enter email'
                  onChange={handleEmailChange}
                />
                <div
                  style={{ cursor: 'pointer' }}
                  className='mx-4 flex justify-center my-4'
                  onClick={() => loginWithLink(email)}
                >
                  Login with email &nbsp;
                  <img src={mail} alt='M' style={{ height: '20px' }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
