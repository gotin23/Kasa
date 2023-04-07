import React from 'react';
import './Banner.css';
import { useLocation } from 'react-router-dom';


export default function Banner({props}) {
    const location = useLocation()
    console.log(location.pathname)
  return (
    <div className='home-banner' style={location.pathname === '/a-propos' ? {height: '211px'} : {}}>
        <img src={props} alt="banner kasa" />
        {location.pathname === '/' && <p>Chez vous,<span className="line-break"><br></br></span> partout et ailleurs</p>}   
    </div>
  )
}
