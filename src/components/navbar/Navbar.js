import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
    <div>make the navbar below this line</div>
    </>
  )
}

export default Navbar