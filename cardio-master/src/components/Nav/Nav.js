import React from 'react'
import logo from '../../logo2.webp';
import "./Nav.css"

const Nav = () => {
  return (
    <div className='menu-nav'>
        <img src={logo} alt="logo" />
        <h1 className='text-warning'>Cardio-Master-Club</h1>
    </div>
  )
}

export default Nav