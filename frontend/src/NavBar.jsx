// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

// function NavBar() {
//     return (
//         <>
//             <div className='nav-container mt-5 '>
//                 <div className='nav-image text-center ml-6'>
//                     <Link to="/">
//                         <img src="logo.svg" alt="images" />
//                     </Link>
//                 </div>
//                 <div className='nav-links text-center'>
//                     <Link to="/">Home</Link>
//                     <Link to="/about">About</Link>
//                     <Link to="/projects">Projects</Link>
//                     <Link to="/contact" >Contact</Link>
//                 </div>
//             </div>
//             <Outlet />
//         </>
//     )
// }

// export default NavBar;


import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav-container mt-4 mb-4.5">
        
        {/* Logo */}
        <div className="nav-image ">
          <Link to="/">
            <img src="logo.svg" alt="logo" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${open ? "active" : ""}`}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>

        {/* Three Dots Icon */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ⋮
        </div>

      </div>

      <Outlet />
    </>
  );
}

export default NavBar;