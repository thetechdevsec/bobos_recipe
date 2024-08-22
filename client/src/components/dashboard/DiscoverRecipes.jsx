import React from 'react';
import { PiBowlSteamDuotone } from "react-icons/pi";
import RecipeCategories from './RecipeCategories';
import { FaAngleRight } from "react-icons/fa6";

function DiscoverRecipes() {
  return (
    <div className='col-span-10'>
			<div className='grid grid-cols-12 gap-4'>
				<div className='flex items-center justify-center col-span-10'>
					<img className='w-10/12 h-80 object-cover rounded-lg' src="https://i.pinimg.com/564x/7a/a0/12/7aa01228b90e4c3f58b96ccef4269827.jpg" alt="" />
				</div>
				<div className='flex flex-col justify-between col-span-2 p-2 bg-green-200 mr-3 rounded-lg'>
					<div>
						<PiBowlSteamDuotone size={50} className='text-amber-950' />
						<p className='my-6'>You have 3 new recipes in your bookmark</p>
					</div>
					<button type='button' className='text-gray-900 bg-green-500 hover:bg-green-400 font-bold py-2 px-4 rounded'>See bookmark</button>
				</div>
			</div>
			<div className='mt-4'>
				<div className='flex justify-between m-2'>
					<h3 className='font-bold'>Categories</h3>
					<p className='flex justify-center items-center text-green-500 font-bold'>View all <FaAngleRight></FaAngleRight></p>
				</div>
				<RecipeCategories />
			</div>
			<div></div>
    </div>
  )
};

export default DiscoverRecipes;