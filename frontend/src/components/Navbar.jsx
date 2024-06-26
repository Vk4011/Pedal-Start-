import React from 'react'
import { Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <>
     <header className="w-full  bg-blue-500 py-4">
        <div className="container mx-auto">
            <Link to="/">
            <img src="https://cdn-icons-png.flaticon.com/128/5170/5170054.png" alt=""  className="w-[50px] ml-10"/>
            </Link>         
        </div>
      </header>
    </>
  )
}

export default Navbar