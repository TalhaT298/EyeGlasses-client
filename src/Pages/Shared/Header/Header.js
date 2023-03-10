import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../../assets/Untitled design (41).png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { BsBoxArrowRight } from "react-icons/bs";


const Header = () => {
    const {user}=useContext(AuthContext);
    const menuItems= <>
        <li className='font-semibold text-orange-200'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-orange-200'><Link to='/features'>Features</Link></li>
        <li className='font-semibold text-orange-200'><Link to='/'>Big Deal</Link></li>
        {
          user?.email?
          <>
          <li className='font-semibold text-orange-200'><Link to='/orders'>Orders</Link></li>
          </>
          :
          <li className='font-semibold text-orange-200' ><Link to='/login'>Login</Link></li>
        }
        
        
    </>

    return (
        <div className="navbar h-20 mb-2 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">EyeGlass</a> */}
    <Link to="/"className="btn btn-ghost normal-case text-xl pb-20 w-40">
        <img src={logo} alt='' />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {menuItems}
    </ul>
  </div>
  <div className="navbar-end ">
  <button className="btn btn-outline text-orange-200"><Link to="/started"><BsBoxArrowRight size='2.5rem'/></Link></button>
  </div>
</div>
    );
};

export default Header;