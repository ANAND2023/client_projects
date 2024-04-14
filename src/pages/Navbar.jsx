// Navbar.js
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center absolute w-full z-10">
      <NavLink
        to="/login"
        activeClassName="text-red-500"
        className="text-white text-lg mx-4 hover:text-gray-300 transition duration-300 ease-in-out"
      >
        <button  id="b_btn">Login</button>
      </NavLink>
    </nav>
  )
}

export default Navbar
