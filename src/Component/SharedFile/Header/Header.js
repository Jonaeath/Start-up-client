import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navImage from '../../../Asset/start-up.PNG';
import { authContext } from '../../../Context/AuthContext/AuthProvide';

const Header = () => {
 
    const {user,logOut} = useContext(authContext);

    const handleSignOt = () => {
        logOut()
          .then(() => {})
          .catch((err) => console.log(err));
      };

    const tabItem = <>
        <li><Link>About Us</Link></li>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/electricCar'>Car Section</Link></li>
        <li><Link>Contact Us</Link></li>
       {
         user?.email ?
         <>
        <li><Link to='/orders'>Order</Link></li> 
        <li>
            <button onClick={handleSignOt}>Sign Out</button>
          </li>

         </>
         :
         <li><Link to='/login'>Log In</Link></li>
       }

    </>

    return (
        <div className='pt-3 pb-2'>
            <div className="navbar h-8 bg-blue-50 rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {tabItem}
                        </ul>

                    </div>
                    <img className='w-6 rounded-xl' src={navImage} alt='' />
                    <Link className="p-1 normal-case font-bold text-3xl text-blue-600">Incubyte</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1  text-blue-600">
                    {tabItem}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Header;