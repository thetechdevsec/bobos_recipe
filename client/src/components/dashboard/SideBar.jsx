import React from 'react';
import { NavLink } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";

function SideBar() {
  return (
    <div className='bg-gray-200 col-span-2 h-screen'>
      <div>
				<h2 className='font-bold text-gray-700 p-2'>MENU</h2>
			</div>
			<div className='grid grid-cols-1 p-2'>
				<NavLink to={'/dashboard'} className='flex items-center gap-2 font-semibold'><span><LuLayoutDashboard /></span> Dashboard</NavLink>
				<NavLink to={'/discover_recipes'}>Discover Recipes</NavLink>
				<NavLink to={'/my_recipes'}>My Recipes</NavLink>
				<NavLink to={'/clients'}>Clients</NavLink>
				<NavLink to={'/messages'}>Messages</NavLink>
			</div>

			<div>
				<h2 className='text-xl p-2'>Your Account</h2>
			</div>

			<div className='grid grid-cols-1 p-2'>
				<NavLink to={'/account'}>Account</NavLink>
				<NavLink to={'/help'}>Help & Support</NavLink>
				<NavLink to={'/log_out'}>Log Out</NavLink>
			</div>
    </div>
  )
};

export default SideBar;