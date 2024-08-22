import React from 'react';
import { IoMdSearch } from "react-icons/io";

function DashHeader() {
  return (
    <>
			<header className='grid grid-cols-12'>
				<div className='col-span-2 bg-gray-900 py-12 px-4'>
					<h2 className='text-xl font-bold'><span className='text-white'>Bobo's</span><span className='text-green-500'>Recipe.</span></h2>
					<p className='text-gray-300 font-bold text-sm'>Healthy meals, healthy life.</p>
				</div>

				<div className='flex justify-between col-span-10 py-10 px-4'>
					<div>
						<p>Hello Mercy,</p>
						<h1 className='text-3xl font-bold'>Discover Recipes</h1>
					</div>

					<div className='flex items-center m-1'>
						<div className='flex items-center justify-center border border-gray-300 rounded-lg'>
							<IoMdSearch size={25} className='text-gray-500' />
							<input type="search" className='p-2 w-96 outline-none' placeholder="Search for Recipes & Ingredients" />
						</div>
					</div>
				</div>

			</header>
		</>
  )
};

export default DashHeader;