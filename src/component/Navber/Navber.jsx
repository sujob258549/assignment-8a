import { NavLink } from "react-router-dom";
import './nav.css'

const Navber = () => {
    const navLink = <>
    <NavLink className={'text-[18px]  font-medium navber'} to={'/'}>Home</NavLink>
    <NavLink className={'text-[18px]  font-medium navber'} to={'/Listed'}>Listed Books</NavLink>
    <NavLink className={'text-[18px]  font-medium navber'} to={'/PagestoRead'}>Pages to Read</NavLink>
    <NavLink className={'text-[18px]  font-medium navber'} to={'/about'}>About</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {
                            navLink
                           }
                        </ul>
                    </div>
                    <h2 className="text-3xl font-bold">Book Vibe</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navLink
                        }
                    </ul>
                </div>
                <div className="navbar-end flex flex-wrap gap-5">
                    <button className="btn text-[18px] font-medium text-white border hover:text-[#23BE0A]  bg-[#23BE0A]">Sign In</button>
                    <button className="btn text-[18px] font-medium text-white border hover:text-[#59C6D2] bg-[#59C6D2]">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;