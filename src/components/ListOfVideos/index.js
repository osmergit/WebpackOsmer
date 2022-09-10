import React from 'react'
import videoBg from '../video/videoBg.mp4'
//import css from './index.css';
export const Main = () => {
          return (
                      <div className='main'>
                          <div className="overlay"></div>
                          <video src={videoBg} autoPlay loop muted />
                          <div className="content">
                              <h1>Welcome</h1>
                              <p>To my site.</p>
                          </div>
                      </div>
                    )
}