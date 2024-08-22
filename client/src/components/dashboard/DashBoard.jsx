import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashHeader from './DashHeader';
import SideBar from './SideBar';
import DiscoverRecipes from './DiscoverRecipes';
import Recipe from './Recipe';

function DashBoard() {
  return (
    <div>
			<DashHeader />
			<div className='grid grid-cols-12'>
				<SideBar></SideBar>

				<Routes>
					<Route path="/discover_recipes" element={<DiscoverRecipes />} />
					<Route path="/recipes/fluffy_pancakes" element={<Recipe />} />
				</Routes>

			</div>
    </div>
  )
};

export default DashBoard;