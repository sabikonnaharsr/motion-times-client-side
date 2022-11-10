import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../../Contexts/UserContext/UserContext'
// import  logo from '../../../../assets/logo.svg';
import { FaUser } from 'react-icons/fa';


const Navbar = () => {
  const {user, logOut} = useContext(AuthContext ); 
  const handleLogout = () => {
    logOut()
    .then(result => {
      const user = result.user;
    })
    .catch(error => console.error(error))
  }
  const menuItems = 
  <>
  <li className='font-semibold'><Link to='/'>Home</Link></li>
  <li className='font-semibold '><Link to='/addServices'>Add Services</Link></li>
  <li className='font-semibold'><Link to='/myReview'>My Review</Link></li>
  <li className='font-semibold'><Link to='/blogs'>Blogs</Link></li>
  {user?.email ?
  <> 
  <li className='font-semibold'><Link to='/allServices'>Services</Link></li>
  </>
  : <li className='font-semibold'><Link to='/login'>login</Link></li>
  }
  

  {user?.uid?
   <li><Link onClick={handleLogout} className='font-semibold'>Log Out</Link></li>
    : 
    <>
    <li className='font-semibold '><Link to='/signup'>Sign Up</Link></li>
     <li className='font-semibold '><Link to='/login'>Login</Link></li>
    </>
  }
  
  </>
 
    return (
      <div className="navbar h-28 bg-slate-900">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        
        <div>
          <Link to='/' href="/" className="btn btn-ghost normal-case text-xl">
           <span className='text-white text-medium font-bold'>
            {/* <img src={logo} alt="" /> */}
            <h1 className='  text-3xl font-GreatVibes'>Motion Times</h1>
          </span>
          </Link>
      </div>
        
      </div>
      <div className="navbar-center hover:after:bg-rose-800 hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">

       {user?.uid? 
          <div className='flex items-center'>
               <h1 className='font-GreatVibes text-blue-700'>{user.displayName}</h1>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src= {user.photoURL}  alt=''/>
              </div>
              </label>
          </div>
          : <FaUser></FaUser> 
        }
        {
          user?.uid? 
          undefined
          :
          <button className="btn btn-outline btn-warning ">Appointment</button>
        }
         
     </div>
    </div>
    );
};

export default Navbar;