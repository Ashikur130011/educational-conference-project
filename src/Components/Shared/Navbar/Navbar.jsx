import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const {user, logout} = useContext(AuthContext)

    const handleLogOut = () => {
        logout()
        .then(()=> {

        })
        .catch(error=> {
            console.log(error)
        })
    }
    
    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li className='px-4'><Link to="/services">Services</Link></li>
        <li className=''><Link to="/about">About</Link></li>
        <li className='px-4'><Link to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Edu Conference</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                    <p>{user.email}</p>
                    <button onClick={handleLogOut} className="btn btn-secondary ml-3">Log Out</button>
                    </>
                    :
                    <NavLink to="/login" className="btn btn-primary">Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;