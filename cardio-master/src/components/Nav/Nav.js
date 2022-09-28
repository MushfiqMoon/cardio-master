import React from 'react'
import logo from '../../logo.webp';
import "./Nav.css"

const Nav = () => {
  return (
    <div className='menu-nav'>
        <img src={logo} alt="logo" />
        <h1 className='text-danger'>Cardio-Master-Club</h1>
    </div>
  )
}

export default Nav